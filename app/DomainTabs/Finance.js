import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text } from 'react-native';
import DocumentCard from './DocumentCard'; // Import the reusable DocumentCard component

const { width } = Dimensions.get('window');

export default function Finance() {
    const [documents, setDocuments] = useState([
        { id: '1', name: 'Bank Statement', date: '15-02-2023', image: 'https://via.placeholder.com/150' },
        { id: '2', name: 'Tax Report', date: '12-04-2023', image: 'https://via.placeholder.com/150' },
        // Add more documents here
    ]);

    const renderItem = ({ item }) => (
        <DocumentCard image={item.image} name={item.name} date={item.date} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Finance Documents</Text>

            <FlatList
                data={documents}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.documentList}
                numColumns={width > 768 ? 4 : 2} // Adjust the number of columns based on screen width
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingHorizontal: width * 0.05,
        paddingVertical: 20,
    },
    heading: {
        fontSize: width > 600 ? 30 : 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    documentList: {
        justifyContent: 'space-between',
    },
});
