import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, Alert } from "react-native";
import InputBox from "@/components/Forms/InputBox.js";
import SubmitButton from "@/components/Forms/SubmitButton.js";
const Register = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit=()=>{
    try {
      setLoading(true);
      if(!name || !email || !password)
      {
          Alert.alert("Please fill all fields");
          setLoading(false);
          return;
      }
      setLoading(false);
      console.log('Registering Data ==>',{name,email,password});
      
    } catch (error) {
      setLoading(false);
      console.log(error);
      
      
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.formTitle}>Register</Text>

      {/* Name Field */}
      <InputBox
        inputTitle={"Name"}
        placeholder={"Enter your Name"}
        keyboardType={"default"}
        value={name}
        setValue={setName}
      />
      <InputBox
        inputTitle={"Email"}
        placeholder={"Enter your Email"}
        autoComplete="email"
        keyboardType={"email-address"}
        value={email}
        setValue={setEmail}
      />
      <InputBox
        inputTitle={"Password"}
        placeholder={"Enter your Password"}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />

      <SubmitButton 
      loading={loading} 
      btnTitle={"Register"}
      handleSubmit={handleSubmit}
       />
       <Text  style={styles.linkText}>
        Already Registered <Text style={styles.logTxt} onPress={()=>navigation.navigate('Login')}>...Login Here</Text>
       </Text>
      {/* <Text>{JSON.stringify({name,email,password})}</Text> */}
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  formTitle: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  linkText:{
   textAlign:'center',
   fontSize:16,
  },
  logTxt:{
    color:"red"

  }
});
