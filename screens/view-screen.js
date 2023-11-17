import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const ViewScreen = () => {
    return(
        <View>
            <Text style={styles.Text}>Mail List</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Text: {
        color: "#fff"
    }
});

export default ViewScreen;