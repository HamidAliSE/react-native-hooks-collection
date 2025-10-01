import { View, Text, StyleSheet } from 'react-native';
import { useDimensions } from 'react-native-hooks-collection/core';

const Dimensions = () => {
    const windowDimensions = useDimensions();
    const screenDimensions = useDimensions('screen');

    return (
        <View style={styles.screen}>
            <View>
                <Text>Window Dimensions</Text>
                <Text>Width: {windowDimensions.width}</Text>
                <Text>Height: {windowDimensions.height}</Text>
                <Text>Scale: {windowDimensions.scale}</Text>
                <Text>Font Scale: {windowDimensions.fontScale}</Text>
            </View>

            <View>
                <Text>Screen Dimensions</Text>
                <Text>Width: {screenDimensions.width}</Text>
                <Text>Height: {screenDimensions.height}</Text>
                <Text>Scale: {screenDimensions.scale}</Text>
                <Text>Font Scale: {screenDimensions.fontScale}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default Dimensions;
