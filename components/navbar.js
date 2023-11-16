import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Svg, Path } from 'react-native-svg';
import HeartIcon from '../assets/NavIcons/Test/c.svg';

const Navbar = () => {
    return (
        <View>
            <Text style={style.Text}>Testowa treść</Text>
            {/* Poprawiony tag Svg */}
            <Svg width="200" height="200" viewBox="0 0 200 200">
                <Path
                    d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
                    stroke="black"
                    strokeWidth="5"
                    fill="none"
                />
            </Svg>
            {/* Poprawiona ikona SVG */}
            <HeartIcon width={50} height={50} />
            <Image style={style.Image} source={require('../assets/NavIcons/Test/MagniIcon.png')} />
            <Image style={style.Image} source={require('../assets/NavIcons/Test/Maskgroup.png')} />
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
