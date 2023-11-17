import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const SearchScreen = () => {
    return(
        <View>
            <Text style={styles.Text}>search menu</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Text: {
        color: "#fff"
    }
});

export default SearchScreen;