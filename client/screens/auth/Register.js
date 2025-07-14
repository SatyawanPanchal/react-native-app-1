import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const Register = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.formTitle}>Register</Text>

      {/* Name Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.inputBox} placeholder="Enter your name" />
      </View>

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.inputBox} placeholder="Enter your email" keyboardType="email-address" />
      </View>

      {/* Password Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.inputBox} placeholder="Enter your password" secureTextEntry />
      </View>
    </ScrollView>
  );
};

export default Register;


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444',
  },
  inputBox: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
