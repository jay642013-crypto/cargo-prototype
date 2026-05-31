import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Automatically read saved email data when the app interface initializes
  useEffect(() => {
    const loadSavedEmail = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('user_email');
        if (savedEmail !== null) {
          setEmail(savedEmail);
        }
      } catch (error) {
        console.log('Error loading persisted data:', error);
      }
    };
    loadSavedEmail();
  }, []);

  // Write email data permanently to device storage upon clicking login
  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('user_email', email);
      navigation.navigate('Map');
    } catch (error) {
      console.log('Error saving data to persistence storage:', error);
      Alert.alert("Storage Error", "Could not access local device storage.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>CAR GO</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logoCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', marginBottom: 40 },
  logoText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  input: { width: '80%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 15, marginBottom: 20, fontSize: 16 },
  button: { width: '80%', height: 50, backgroundColor: '#000', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
