import React, { useState, useEffect, PureComponent } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Item extends PureComponent {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.view}>
                <View style={styles.innerView}>
                    <Text style={styles.text}>{"Title: \n"}{item.title}</Text>
                    <Text style={styles.text}>{"Artist: \n"}{item.artist_title ? item.artist_title : 'Artist unknown'}</Text>
                    <Ionicons style={styles.ionicons} name={'heart-outline'} size={25} color={'#fff'} />
                </View>
            </View>
        );
    }
}

export default function SearchScreen({ navigation }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        fetchData();
    }, [page, searchTerm]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}`);
            const jsonData = await response.json();
            setTotalResults(jsonData.config.total);
            setContent((prevContent) => [...prevContent, ...jsonData.data]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        setPage(1);
        setTotalResults(0);
        setContent([]); // Resetujemy zawartość przy nowym wyszukiwaniu
        fetchData();
    };

    const handleLoadMore = () => {
        if (!loading && content.length < totalResults) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Wprowadź termin wyszukiwania..."
                onChangeText={(text) => setSearchTerm(text)}
                value={searchTerm}
            />
            <Button title="Szukaj" onPress={handleSearch} />

            <FlatList
                style={styles.flatList}
                data={content}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                renderItem={({ item }) => <Item item={item} />}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={() => loading && <ActivityIndicator />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#081526',
        paddingTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 16,
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
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 6,
        color: '#fff',
        textAlign: 'center',
        justifyContent: "center"
    },
    ionicons: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: "center"
        
        
    }
});
