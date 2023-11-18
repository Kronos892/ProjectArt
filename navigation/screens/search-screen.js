import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SearchScreen ({navigation}) {
    return(
        <View style={styles.View}>
            <Text style={styles.Text}
                onPress={() => navigation.navigate('All')}
            >Search Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    View: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#081526",
    },
    Text: {
        color: "#fff",
        
    }
});

