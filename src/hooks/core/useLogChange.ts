import { useEffect } from 'react';

const useLogChange = <T>(label: string, value: T) => {
    useEffect(() => {
        console.log(`${label}: ${value}`);
    }, [label, value]);
};

export default useLogChange;
