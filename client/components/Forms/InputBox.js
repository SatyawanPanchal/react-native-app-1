import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function InputBox({inputTitle,autoComplete,keyboardType,placeholder,secureTextEntry=false,value,setValue}) {
  return (
    <View style={styles.inputContainer}>
      <Text  style={styles.label}>{inputTitle}</Text>
        <TextInput 
        style={styles.inputBox} 
        placeholder={placeholder} 
        autoComplete={autoComplete}
        keyboardType={keyboardType}  
        secureTextEntry={secureTextEntry}  
        value={value}
        onChangeText={(text)=>{setValue(text)}}
        />
    </View>
  );
}

const styles = StyleSheet.create({

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
