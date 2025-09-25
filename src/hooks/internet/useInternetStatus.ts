import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

interface UseInternetStatusOptions {
    pingUrl?: string;
    pingInterval?: number;
    enableDefaultPing?: boolean;
}

const useInternetStatus = ({
    pingUrl,
    pingInterval,
    enableDefaultPing = false,
}: UseInternetStatusOptions = {}) => {
    const DEFAULT_URL = 'https://www.google.com';
    const DEFAULT_INTERVAL = 10000;

    const [isConnected, setIsConnected] = useState<boolean | null>(null);
    const [isInternetReachable, setIsInternetReachable] = useState<boolean | null>(null);
    const [pingTime, setPingTime] = useState<number | null>(null);
    const [lastPing, setLastPing] = useState<number | null>(null);

    useEffect(() => {
        let isMounted = true;
        let intervalId: NodeJS.Timeout;

        const ping = async (url: string) => {
            try {
                const start = Date.now();
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 3000);
                await fetch(url, { method: 'HEAD', signal: controller.signal });
                clearTimeout(timeout);
                return Date.now() - start;
            } catch {
                return null;
            }
        };

        const shouldPing = pingUrl || pingInterval || enableDefaultPing;
        const urlToUse = pingUrl || (enableDefaultPing ? DEFAULT_URL : '');
        const intervalToUse = pingInterval || (enableDefaultPing ? DEFAULT_INTERVAL : 0);

        const updateStatus = async () => {
            try {
                const state = await NetInfo.fetch();
                if (!isMounted) return;

                setIsConnected(state.isConnected ?? false);

                if (shouldPing && urlToUse) {
                    const duration = await ping(urlToUse);
                    setIsInternetReachable(duration !== null);
                    setPingTime(duration);
                    setLastPing(Date.now());
                } else {
                    setIsInternetReachable(state.isInternetReachable ?? false);
                }
            } catch {
                if (!isMounted) return;
                setIsConnected(false);
                setIsInternetReachable(false);
                setPingTime(null);
            }
        };

        updateStatus();

        const unsubscribe = NetInfo.addEventListener(async state => {
            if (!isMounted) return;
            setIsConnected(state.isConnected ?? false);

            if (shouldPing && urlToUse) {
                const duration = await ping(urlToUse);
                setIsInternetReachable(duration !== null);
                setPingTime(duration);
                setLastPing(Date.now());
            } else {
                setIsInternetReachable(state.isInternetReachable ?? false);
            }
        });

        if (shouldPing && urlToUse && intervalToUse > 0) {
            intervalId = setInterval(async () => {
                if (!isMounted) return;
                const duration = await ping(urlToUse);
                setIsInternetReachable(duration !== null);
                setPingTime(duration);
                setLastPing(Date.now());
            }, intervalToUse);
        }

        return () => {
            isMounted = false;
            unsubscribe();
            intervalId && clearInterval(intervalId);
        };
    }, [pingUrl, pingInterval, enableDefaultPing]);

    return { isConnected, isInternetReachable, pingTime, lastPing };
};

export default useInternetStatus;
