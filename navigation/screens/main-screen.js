import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function MainScreen({ navigation }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>{data ? `Title: ${data.title}` : 'Loading...'}</Text>
            <Text>
                {data ? `Completed: ${data.completed !== undefined ? data.completed.toString() : 'N/A'}` : ''}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});
