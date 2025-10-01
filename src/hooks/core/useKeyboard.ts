import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

const useKeyboard = () => {
    const [keyboardShown, setKeyboardShown] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        const showSub = Keyboard.addListener("keyboardDidShow", (e: KeyboardEvent) => {
            setKeyboardShown(true);
            setKeyboardHeight(e.endCoordinates.height);
        });

        const hideSub = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardShown(false);
            setKeyboardHeight(0);
        });

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    return { keyboardShown, keyboardHeight };
};

export default useKeyboard;
