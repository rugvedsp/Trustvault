import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const DocumentCard = ({ image, name, date }) => {
  const cardWidth = width > 1200 ? width / 5 - 30 : width > 768 ? width / 4 - 30 : width / 2 - 30; // Calculate card width dynamically

  return (
    <View>
    <TouchableOpacity style={[styles.documentCard, { width: cardWidth }]}>    
      <Image source={{ uri: image }} style={styles.documentImage} />
      <Text style={styles.documentText}>{name}</Text>
      <Text style={styles.documentDate}>{date}</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  documentCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  documentImage: {
    width: '100%',
    height: width>786 ? 200:120,
    // height:150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  documentText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  documentDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default DocumentCard;
