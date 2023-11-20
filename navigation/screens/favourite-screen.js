import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavouriteScreen = () => {
    const [favoritesArray, setFavoritesArray] = useState([]);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            if (favorites) {
                const favoritesArray = JSON.parse(favorites);
                setFavoritesArray(favoritesArray);
            }
        } catch (error) {
            console.error('Error loading favorites:', error);
        }
    };

    return (
        <View style={styles.container}>
            {favoritesArray.length === 0 ? (
                <Text style={styles.text}>No favorites yet.</Text>
            ) : (
                <FlatList
                    style={styles.flatList}
                    data={favoritesArray}
                    keyExtractor={(itemId) => `${itemId}`}
                    renderItem={({ item }) => (
                        <View style={styles.view}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    )}
                    ListFooterComponent={() => <ActivityIndicator />}
                />
                
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#081526',
        paddingTop: 20,
    },
    flatList: {
        flex: 1,
        width: '100%',
    },
    view: {
        padding: 8,
        margin: 7,
        backgroundColor: '#0D1D32',
        borderRadius: 12,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
    },
});

export default FavouriteScreen;
