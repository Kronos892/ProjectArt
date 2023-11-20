import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ViewScreen({ route }) {
    const { itemId } = route.params;
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        fetchItemDetails();
    }, [itemId]);

    const fetchItemDetails = async () => {
        try {
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/${itemId}?fields=id,title,image_id`);
            const jsonData = await response.json();
            setItemDetails(jsonData.data);
        } catch (error) {
            console.error('Error fetching item details:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{itemDetails?.title}</Text>
            {itemDetails?.image_id && (
                <Image
                    style={styles.image}
                    source={{ uri: `https://www.artic.edu/iiif/2/${itemDetails.image_id}/full/843,/0/default.jpg` }}
                />
            )}
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
        backgroundColor: '#081526',
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: "center",
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
    },

});
