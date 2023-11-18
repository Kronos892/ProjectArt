import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function MainScreen ({navigation}) {
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>Czas zacząć zabawę</Text>
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
        color: "#C04",
        
    }
});

