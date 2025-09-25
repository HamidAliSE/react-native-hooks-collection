import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useThrottledCallback } from 'react-native-hooks-collection/core';

const ThrottledCallback = () => {
    const [leadingMsg, setLeadingMsg] = useState('');
    const [trailingMsg, setTrailingMsg] = useState('');
    const [bothMsg, setBothMsg] = useState('');

    const inputChange = (text: string) => {
        leadingThrottle(text);
        trailingThrottle(text);
        bothThrottle(text);
    };

    // Leading only
    const leadingThrottle = useThrottledCallback((text: string) => {
        setLeadingMsg('Leading: ' + text);
    }, 1000);

    // Trailing only
    const trailingThrottle = useThrottledCallback((text: string) => {
        setTrailingMsg('Trailing: ' + text);
    }, 1000, { leading: false, trailing: true });

    // Leading + Trailing
    const bothThrottle = useThrottledCallback((text: string) => {
        setBothMsg('Both: ' + text);
    }, 1000, { trailing: true });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Type something to see throttling:</Text>
            <TextInput
                style={styles.input}
                onChangeText={inputChange}
                placeholder="Enter text..."
            />
            <Text style={styles.output}>{leadingMsg}</Text>
            <Text style={styles.output}>{trailingMsg}</Text>
            <Text style={styles.output}>{bothMsg}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    label: { marginBottom: 10, fontWeight: 'bold' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 },
    output: { marginVertical: 5, fontSize: 16 },
});

export default ThrottledCallback;
