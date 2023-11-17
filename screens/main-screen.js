import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const MainScreen = () => {
    return(
        <View>
            <Text style={styles.Text}>Main List</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Text: {
        color: "#fff"
    }
});

export default MainScreen;