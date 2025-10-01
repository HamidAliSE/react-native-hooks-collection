import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useKeyboard } from 'react-native-hooks-collection/core';

const Keyboard = () => {
    const { keyboardShown, keyboardHeight } = useKeyboard();

    return (
        <View style={styles.screen}>
            <TextInput style={styles.textInput} placeholder="Tap to open keyboard" placeholderTextColor="grey" />
            <Text>{keyboardShown ? 'Keyboard is shown' : 'Keyboard is hidden'}</Text>
            <Text>Keyboard height: {keyboardHeight}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '60%',
        marginBottom: 20,
    },
});

export default Keyboard;
