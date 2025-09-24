import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, FlatList } from 'react-native';
import { useDebouncedCallback } from 'react-native-hooks-collection/core';

const ITEMS = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes'];

const DebouncedCallback = () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState<string[]>(ITEMS);

    const debouncedSearch = useDebouncedCallback((text: string) => {
        const filtered = ITEMS.filter(item =>
            item.toLowerCase().includes(text.toLowerCase())
        );
        setResults(filtered);
    }, 1000);

    return (
        <View style={styles.screen}>
            <TextInput
                value={value}
                onChangeText={(t) => {
                    setValue(t);
                    debouncedSearch(t);
                }}
                placeholder="Search fruits..."
                style={styles.textInput}
            />
            <FlatList
                data={results}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Text style={styles.result}>{item}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        marginTop: 40,
    },
    textInput: {
        borderWidth: 1,
        padding: 8,
        marginBottom: 12,
    },
    result: {
        padding: 6,
        fontSize: 16,
    },
});

export default DebouncedCallback;
