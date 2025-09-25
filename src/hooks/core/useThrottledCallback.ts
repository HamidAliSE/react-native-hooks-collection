import { useRef, useCallback } from 'react';

type Options = {
    leading?: boolean;
    trailing?: boolean;
};

const useThrottledCallback = <T extends (...args: any[]) => void>(
    callback: T,
    delay: number,
    options: Options = {}
) => {
    const { leading = true, trailing = false } = options;
    const lastCall = useRef(0);
    const timeout = useRef<NodeJS.Timeout | null>(null);
    const lastArgs = useRef<Parameters<T>>();

    return useCallback(
        (...args: Parameters<T>) => {
            const now = Date.now();

            if (leading && now - lastCall.current >= delay) {
                // run immediately
                lastCall.current = now;
                callback(...args);

            } else if (trailing) {
                // save args for trailing
                lastArgs.current = args;

                if (!timeout.current) {
                    const remaining = delay - (now - lastCall.current);
                    timeout.current = setTimeout(() => {
                        timeout.current = null;
                        lastCall.current = Date.now();
                        if (lastArgs.current) {
                            callback(...lastArgs.current);
                            lastArgs.current = undefined;
                        }
                    }, remaining > 0 ? remaining : delay);
                }
            }
        },
        [callback, delay, leading, trailing]
    );
};

export default useThrottledCallback;
