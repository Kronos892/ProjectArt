import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from '@iconify/react';


const Navbar = () => {
    return (
        <View>
            <Icon icon="ic:sharp-home" />
        </View>
    )
}

const style = StyleSheet.create({
    Text: {
        color: '#fff',
        paddingTop: 50,
    },
});

export default Navbar;
