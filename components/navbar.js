import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'


const iconSize = 30;
const Navbar = () => {
    return (
        <View style={style.View}>
            <FontAwesome name="home" color={'#fff'} size={iconSize} />
            <FontAwesome name="search" color={'#fff'} size={iconSize} />
            <FontAwesome name="heart" color={'#fff'} size={iconSize} />
        </View>
    )
}

const style = StyleSheet.create({
    Text: {
        color: '#fff',
        paddingTop: 50,
    },
    View: {
        
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
        backgroundColor: "#040911",
        elevation: 9,
        
    }
});

export default Navbar;
