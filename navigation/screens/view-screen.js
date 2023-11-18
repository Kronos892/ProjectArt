import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ViewScreen ({navigation}) {
    return(
        <View style={styles.View}>
            <Text style={styles.Text}
                onPress={() => navigation.navigate('Home')}
            >ViewScreen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    View: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        color: "#fff",
        
    }
});

