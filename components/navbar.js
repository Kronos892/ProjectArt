import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { SCREEN_NAMES } from "../App";


const selectedSize = 35;
const nonSelectedSize = 30;
const Navbar = ({selectScreen, curentScreen}) => {
    return (
        <View style={style.View}>
            <FontAwesome name="home" color={'#fff'} size={
                curentScreen === SCREEN_NAMES.MAIN ? selectedSize : nonSelectedSize
            }/>
            <FontAwesome name="search" color={'#fff'} size={
                curentScreen === SCREEN_NAMES.SEARCH ? selectedSize : nonSelectedSize
            }/>
            <FontAwesome name="heart" color={'#fff'} size={
                curentScreen === SCREEN_NAMES.FAV ? selectedSize : nonSelectedSize
            }/>

        </View>
    )
};

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
