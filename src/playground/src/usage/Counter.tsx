import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useCounter } from 'react-native-hooks-collection/core';

const Counter = () => {
    const { increment, decrement, set, reset, count } = useCounter(0);

    return (
        <View style={styles.screen}>
            <Text style={styles.countText}>{count}</Text>
            <TextInput
                style={styles.textInput}
                value={count.toString()}
                onChangeText={(text) => set(Number(text))}
                keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
                <Button title="Minus" onPress={() => count > 0 && decrement()} disabled={count <= 0} />
                <Button title="Plus" onPress={increment} />
                <Button title="Reset" onPress={reset} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    countText: {
        fontSize: 50,
        textAlign: 'center',
    },
});

export default Counter;
