import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, Alert } from "react-native";
import InputBox from "@/components/Forms/InputBox.js";
import SubmitButton from "@/components/Forms/SubmitButton.js";
const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please fill all fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log("Login Data ==>", { email, password });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.formTitle}>Login</Text>

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
        btnTitle={"Login"}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Not Registered <Text style={styles.logTxt} onPress={()=>navigation.navigate("Register")}>...Register Here</Text>
      </Text>
      {/* <Text>{JSON.stringify({name,email,password})}</Text> */}
    </ScrollView>
  );
};

export default Login;

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
  linkText: {
    textAlign: "center",
    fontSize: 16,
  },
  logTxt: {
    color: "red",
  },
});
