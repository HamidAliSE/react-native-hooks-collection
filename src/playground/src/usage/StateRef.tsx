import { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useStateRef } from 'react-native-hooks-collection/core';

const StateRef = () => {
    const [counter1, setCounter1, counter1Ref] = useStateRef(0);
    const [counter2, setCounter2] = useState(counter1);
    const [counter3, setCounter3] = useState(counter1);

    const increment = () => {
        setCounter1(counter1 + 1);
        setCounter2(counter1);
        setCounter3(counter1Ref.current);
    };

    return (
        <View style={styles.screen}>
            <Text>Original counter: {counter1}</Text>
            <Text>Stale counter: {counter2}</Text>
            <Text>Up to date counter: {counter3}</Text>
            <Button onPress={increment} title="Increment" />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StateRef;
