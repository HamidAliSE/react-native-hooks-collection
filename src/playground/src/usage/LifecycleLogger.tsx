import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLifecycleLogger } from 'react-native-hooks-collection/core';

const LifecycleLogger = () => {
    useLifecycleLogger('LifecycleLogger');

    const [count, setCount] = useState(0);

    return (
        <View style={styles.screen}>
            <Text style={styles.countText}>{count}</Text>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
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
    countText: {
        fontSize: 50,
    },
});

export default LifecycleLogger;
