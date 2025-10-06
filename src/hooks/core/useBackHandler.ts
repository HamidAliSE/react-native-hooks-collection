import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBackHandler = (handler: () => boolean) => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handler);

        return () => backHandler.remove();
    }, [handler]);
}

export default useBackHandler;
