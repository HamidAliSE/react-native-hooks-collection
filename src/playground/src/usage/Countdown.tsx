import { View, Text, StyleSheet } from 'react-native';
import { useCountdown } from 'react-native-hooks-collection/core';

const Countdown = () => {
    const [countdown] = useCountdown(60);

    return (
        <View style={styles.screen}>
            <Text style={styles.countdownText}>{countdown}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    countdownText: {
        fontSize: 50,
    },
});

export default Countdown;
