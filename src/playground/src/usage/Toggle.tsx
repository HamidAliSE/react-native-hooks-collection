import { View, Text, StyleSheet, Switch } from 'react-native';
import { useToggle } from 'react-native-hooks-collection/core';

const Toggle = () => {
    const [open, toggleOpen] = useToggle();

    return (
        <View style={styles.screen}>
            <Text style={styles.toggleStatus}>{open ? 'Open' : 'Closed'}</Text>
            <Switch thumbColor="white" trackColor={{ true: 'chocolate', false: 'gray' }} value={open} onValueChange={toggleOpen} />
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
    toggleStatus: {
        fontSize: 50,
    },
});

export default Toggle;
