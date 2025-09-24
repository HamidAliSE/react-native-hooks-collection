import { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { useDebounce } from 'react-native-hooks-collection/core';

const Debounce = () => {
    const [text, setText] = useState('');
    const debouncedText = useDebounce(text, 1000);

    return (
        <View style={styles.screen}>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Type something..."
                style={styles.textInput}
            />
            <Text>Immediate: {text}</Text>
            <Text>Debounced: {debouncedText}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        color: 'black',
        width: 200,
        padding: 8,
    },
});

export default Debounce;
