import React, { useState, useEffect } from 'react';
import { View, Text, AppState, AppStateStatus, StyleSheet } from 'react-native';
import { useLogChange } from 'react-native-hooks-collection/core';

const AppStateLogger = () => {
    const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', setAppState);

        return () => subscription.remove();
    }, []);

    useLogChange('AppState', appState);

    return (
        <View style={styles.screen}>
            <Text>Current App State: {appState}</Text>
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

export default AppStateLogger;
