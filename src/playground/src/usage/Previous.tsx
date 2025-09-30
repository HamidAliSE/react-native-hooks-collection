import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { usePrevious } from 'react-native-hooks-collection/core';

const Previous = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <View style={styles.screen}>
            <Text>Current Count: {count}</Text>
            <Text>Previous Count: {prevCount}</Text>
            <Button title="Decrement" onPress={() => setCount(count - 1)} />
            <Button title="Increment" onPress={() => setCount(count + 1)} />
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

export default Previous;
