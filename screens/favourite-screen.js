import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const FavouriteScreen = () => {
    return(
        <View>
            <Text style={styles.Text}>fav List</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Text: {
        color: "#fff"
    }
});

export default FavouriteScreen;