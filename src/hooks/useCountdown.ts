import { useState, useEffect, useRef } from 'react';
import useAppState from './useAppState';

const useCountdown = (initialSeconds: number): [number, () => void] => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const backgroundTimeRef = useRef<Date | null>(null);
    const nextAppState = useAppState();

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
        }, 1000);

        if (nextAppState === 'active' && backgroundTimeRef.current) {
            // Calculate elapsed time in seconds while app was in background
            const now = new Date();
            const elapsedSeconds = Math.floor(
                (now.getTime() - backgroundTimeRef.current.getTime()) / 1000
            );

            // Update the seconds state considering background time
            setSeconds((prevSeconds) => {
                const newSeconds = Math.max(0, prevSeconds - elapsedSeconds);
                return newSeconds;
            });

            backgroundTimeRef.current = null;
        } else if (nextAppState === 'background') {
            backgroundTimeRef.current = new Date();
        }

        return () => {
            clearInterval(interval);
        };
    }, [nextAppState]);

    const reset = () => setSeconds(initialSeconds);

    return [seconds, reset];
};

export default useCountdown;
