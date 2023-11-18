import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';

const ArtList = ({ page }) => {
    const [posts, setPosts] = useState([]);
    const [pageSize, setPageSize] = useState(15);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&size=${pageSize}`);
                const data = await response.json();

                // Sprawdź, czy data jest tablicą przed użyciem operatora spread
                if (Array.isArray(data)) {
                    setPosts((prevPosts) => [...prevPosts, ...data]);
                } else {
                    console.error('Data is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchData();
    }, [page]);

    const handleLoadMore = () => {
        // setPage((prevPage) => prevPage + 1); // Nie jest już potrzebne, ponieważ page jest przekazywane jako prop
    };

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text style={styles.Text}>{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            )}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            style={styles.FlatList}
        />
    );
};

export default function MainScreen({ navigation }) {
    const [page, setPage] = useState(1);

    return (
        <View style={styles.Container}>
            <StatusBar style="light" />
            <Text>List of Posts:</Text>
            <ArtList page={page} />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#081526",
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        color: "#C04",
    },
    FlatList: {
        width: "100%",
    },
});
