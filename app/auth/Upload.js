import {View,Text,StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image} from 'react-native';
import React, { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../../configs/firebaseConfig' ; //(config ki jagah tere firebaseConfig file ka location type kar yahan)
import * as FileSystem from 'expo-file-system';

const UploadMediaFile = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const uploadMedia = async () => {
        if (!image) {
            Alert.alert("Please select an image first!");
            return;
        }

        setUploading(true);
        try {
            const { uri } = await FileSystem.getInfoAsync(image);
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = () => {
                    resolve(xhr.response);
                };
                xhr.onerror = (e) => {
                    reject(new TypeError("Network request failed"));
                };
                xhr.responseType = 'blob';
                xhr.open('GET', uri, true);
                xhr.send(null);
            });

            const filename = image.substring(image.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(filename);
            await ref.put(blob);  // Upload the blob to Firebase storage
            Alert.alert('Photo uploaded!!');
        } catch (error) {
            console.error(error);
            Alert.alert('Error uploading photo');
        } finally {
            setUploading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Upload Media File</Text>
            <TouchableOpacity onPress={pickImage} style={styles.button}>
                <Text style={styles.buttonText}>Pick an Image</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <TouchableOpacity onPress={uploadMedia} style={styles.button}>
                <Text style={styles.buttonText}>Upload Image</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    image: {
        width: 200,
        height: 200,
        margin: 10,
    },
});
export default UploadMediaFile;
