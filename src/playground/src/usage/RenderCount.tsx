import { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useRenderCount } from 'react-native-hooks-collection/core';

const RenderCount = () => {
    const renderCount = useRenderCount();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.renderCountText}>{renderCount}</Text>
            <Switch thumbColor="white" trackColor={{ true: 'chocolate', false: 'gray' }} value={isEnabled} onValueChange={setIsEnabled} />
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
    renderCountText: {
        fontSize: 50,
    },
});

export default RenderCount;
