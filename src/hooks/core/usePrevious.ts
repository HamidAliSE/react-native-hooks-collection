import { useRef, useState, useLayoutEffect } from 'react';

const usePrevious = <T>(value: T): T | undefined => {
    const ref = useRef<T>();
    const [prev, setPrev] = useState<T | undefined>(undefined);

    useLayoutEffect(() => {
        setPrev(ref.current);
        ref.current = value;
    }, [value]);

    return prev;
}

export default usePrevious;
