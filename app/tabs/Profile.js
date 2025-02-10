import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, Image, ScrollView, StyleSheet, useWindowDimensions, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { auth } from "./../../configs/firebaseConfig";
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const [user, setUser] = useState(null);
    const { width } = useWindowDimensions();
    const router = useRouter();
    const navigation = useNavigation();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  useEffect(() => {
    navigation.setOptions({headerShown:false});
  },[]);

 
  return (

    <ScrollView style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/tabs/MainPage")}>
            <Feather name="arrow-left" color="black" size={25} />
        </TouchableOpacity>
    </View>

      {/* Profile Section */}
      <View style={[styles.profileSection, { paddingHorizontal: width * 0.05 }]}>
        <Image
          source={{ uri:  "https://wallpapers.com/images/hd/user-profile-placeholder-icon-8uxbdj1myl7rm20u.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{ 'John Doe '}</Text>
        <Text style={styles.profileEmail}>{user?.email || 'johndoe@gmail.com'}</Text>
      </View>

      {/* Settings Options */}
      <View style={[styles.settingsContainer, { paddingHorizontal: width * 0.05 }]}>
        <SettingItem title="Change Password" icon="lock" />
        <SettingItem title="Manage Linked Accounts" icon="link" />
        <SettingItem title="Dark Mode" icon="moon" toggle />
        <SettingItem title="Notifications" icon="bell" toggle/>
        <SettingItem title="Language" icon="globe" />
        <SettingItem title="Manage Devices" icon="smartphone" />
        <SettingItem title="Biometric Authentication" icon="shield" toggle />
        <SettingItem title="Storage Usage" icon="database" />
        <SettingItem title="Clear Cache" icon="trash" />
        <SettingItem title="Export Data" icon="download" />
        <SettingItem title="Help & FAQs" icon="help-circle" />
        <SettingItem title="Privacy Policy" icon="file-text" />
        <SettingItem title="Terms & Conditions" icon="book-open" />
      </View>

      {/* Logout Button */}
      
      <TouchableOpacity style={[styles.logoutButton, { marginHorizontal: width * 0.05 }]}>
        <Text style={styles.logoutText} onPress={() => router.replace("/auth/sign-in/index.js")}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const SettingItem = ({ title, icon, toggle }) => {
  return (
    <View style={styles.settingItem}>
      <View style={styles.settingItemLeft}>
        <Feather name={icon} size={20}  style={styles.settingIcon} />
        <Text style={styles.settingText}>{title}</Text>
      </View>
      {toggle ? <Switch trackColor={{ false: '#fff', true: '#888' }} thumbColor="#606060" /> : <Feather name="chevron-right" size={20} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 19,

  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
  },
  settingsContainer: {
    paddingVertical: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 10,
  },
  settingText: {
    fontSize: 16,
  },
  logoutButton: {
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  logoutText: {
    color:"white",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
