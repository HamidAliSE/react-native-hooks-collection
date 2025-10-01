import { View, Text, StyleSheet } from 'react-native';
import { useOrientation } from 'react-native-hooks-collection/core';

const Orientation = () => {
    const { isPortrait, isLandscape } = useOrientation();

    return (
        <View style={styles.screen}>
            <Text>{isPortrait ? 'Portrait' : 'Landscape'}</Text>
            <Text>{isLandscape ? 'Landscape' : 'Portrait'}</Text>
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
});

export default Orientation;
