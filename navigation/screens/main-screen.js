import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, TouchableOpacity  } from 'react-native';
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MainScreen({ navigation }) {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
            const jsonData = await response.json();
            setContent((prevContent) => [...prevContent, ...jsonData.data]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        if (!loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handleItemPress = (id) => {
        // Przekierowanie do ekranu szczegółów i przekazanie id
        navigation.navigate('View', { itemId: id });
        //onPress={() => navigation.navigate('All')}
    };

    return (
        <FlatList
            style={styles.container}
            data={content}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.TouchableOpacity} onPress={() => handleItemPress(item.id)}>
                    <View style={styles.View}>
                        <Text style={styles.Text}>{"Title: \n"}{item.title}</Text>
                        <Text style={styles.Text}>{"Artist: \n"}{item.artist_title ? item.artist_title : 'Artist unknown'}</Text>
                        <Ionicons style={styles.ionicons} name={'heart-outline'} size={25} color={'#fff'} />
                    </View>
                </TouchableOpacity>
            )}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => loading && <ActivityIndicator />}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#081526',
        paddingTop: 10,
        
    },
    View: {
        flex: 1,
        padding: 8,
        margin: 7,
        border: 3,
        backgroundColor: '#0D1D32',
        borderRadius: 12,
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: "center"
        
    },
    Text: {
        flex: 6,
        color: '#fff',
        textAlign: 'center',
        justifyContent: "center"
    },
    Ionicons: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: "center"
        
        
    },
    TouchableOpacity: {
        flex: 1,
    }
    
});
