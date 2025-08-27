import { useEffect } from 'react';
import useIsFirstRender from './useIsFirstRender';

const useLifecycleLogger = (
    name?: string,
) => {
    const prefix = name ? `[${name}]` : '[Component]';
    const isFirstRender = useIsFirstRender();

    useEffect(() => {
        console.log(`${prefix} Mounted.`);

        return () => {
            console.log(`${prefix} 1 Unmounted.`);
        };
    }, [prefix]);

    useEffect(() => {
        if (isFirstRender) {
            return;
        }
        console.log(`${prefix} Updated (Re-rendered).`);
    });
};

export default useLifecycleLogger;
