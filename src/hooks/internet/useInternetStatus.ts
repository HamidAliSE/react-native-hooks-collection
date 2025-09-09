import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useInternetStatus = () => {
    const [isConnected, setIsConnected] = useState<boolean | null>(null);

    useEffect(() => {
        NetInfo.fetch().then(state => {
            setIsConnected(state.isConnected ?? false);
        });

        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected ?? false);
        });

        return () => unsubscribe();
    }, []);

    return { isConnected };
};

export default useInternetStatus;
