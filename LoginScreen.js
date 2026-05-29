import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

/**
 * [LO 1: Mobile Deployment]
 * User Onboarding requirement implementation.
 * Manages core profile access configuration.
 */
export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Automotive-themed UI branding design */}
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>CAR GO</Text>
      </View>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa" 
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        placeholderTextColor="#aaa" 
        autoCapitalize="none"
      />
      
      {/* Navigates directly to the Map screen */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1B3245', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  logoCircle: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    backgroundColor: '#2C4A63', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 30, 
    borderWidth: 2, 
    borderColor: '#fff' 
  },
  logoText: { 
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 18
  },
  input: { 
    width: '80%', 
    height: 45, 
    backgroundColor: '#fff', 
    borderRadius: 20, 
    paddingHorizontal: 15, 
    marginBottom: 15,
    color: '#000'
  },
  button: { 
    width: '40%', 
    height: 45, 
    backgroundColor: '#000', 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  }
});