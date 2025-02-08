import React, { useEffect, useState } from 'react';
import { 
  View, FlatList, StyleSheet, Dimensions, Text, TouchableOpacity, Modal, ActivityIndicator 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function HealthCare() {
  const router = useRouter();

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [templateDocs, setTemplateDocs] = useState([]);
  const [templateModalVisible, setTemplateModalVisible] = useState(false);

  // Fetch Stored Documents from API
  const handleViewDocuments = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/templates'); 
      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      const result = await response.json();
      setTemplateDocs(result); // Store fetched documents
    } catch (error) {
      console.error('Error fetching templates:', error);
    } finally {
      setLoading(false);
      setTemplateModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.heading}>Health Care Documents</Text>

      {/* Add Document Button */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={handleViewDocuments}
      >
        <Text style={styles.addButtonText}>View Documents</Text>
      </TouchableOpacity>

      {/* Template Documents Modal */}
      <Modal visible={templateModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Stored Documents</Text>

            {loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : templateDocs.length > 0 ? (
              <FlatList 
                data={templateDocs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.docItem}>
                    <Text style={styles.modalText}>📄 {item.name}</Text>
                    <Text style={styles.modalText}>📅 {item.date}</Text>
                  </View>
                )}
              />
            ) : (
              <Text style={styles.modalText}>No documents available</Text>
            )}

            <TouchableOpacity 
              onPress={() => setTemplateModalVisible(false)} 
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    margin: width > 786 ? 60 : 10,
    marginBottom: width > 786 ? 0 : 10,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 40,
    marginRight: 20,
  },
  heading: {
    fontSize: width > 600 ? 30 : 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: width > 786 ? 10 : 40,
  },
  addButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold"
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  docItem: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    marginVertical: 5,
    width: "100%",
    borderRadius: 5,
  }
});

