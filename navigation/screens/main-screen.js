import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

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

    return (
        <FlatList
            style={styles.container}
            data={content}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => (
                <View key={item.index} style={styles.View}>
                    <Text style={styles.Text}>{item.title}</Text>
                    <Text style={styles.Text}>{item.artist_title ? item.artist_title : 'Artist unknown'}</Text>
                    
                </View>
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
        height: 80,
        padding: 8,
        margin: 7,
        border: 3,
        backgroundColor: '#0D1D32',
        
        

    },
    Text: {
        color: '#fff',
    },
});
