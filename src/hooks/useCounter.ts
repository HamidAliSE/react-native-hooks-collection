import { useState } from 'react';

const useCounter = (initialValue: number = 0) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(initialValue);
    const set = (value: number) => setCount(value);

    return { count, increment, decrement, reset, set };
};

export default useCounter;
