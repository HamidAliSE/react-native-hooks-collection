import { useState, useRef, Dispatch, SetStateAction } from 'react';

type ReadonlyRefObject<T> = {
    readonly current: T;
};

type UseStateRefReturn<T> = [
    T,
    Dispatch<SetStateAction<T>>,
    ReadonlyRefObject<T>
];

const useStateRef = <T>(initialValue: T): UseStateRefReturn<T> => {
    const [state, setState] = useState<T>(initialValue);
    const ref = useRef<T>(state);

    const updateState: Dispatch<SetStateAction<T>> = (valueOrFunction) => {
        const updatedState =
            typeof valueOrFunction === 'function'
                ? (valueOrFunction as (prev: T) => T)(ref.current)
                : valueOrFunction;

        setState(updatedState);
        ref.current = updatedState;
    };

    return [state, updateState, ref];
}

export default useStateRef;
