import { StyleSheet, Text, View ,TouchableOpacity } from "react-native";
import React from "react";

export default function SubmitButton({handleSubmit,btnTitle="btnTitle",loading}) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}> {loading?"loading...":btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
btn:{
     

            backgroundColor:"#1e2225",
            color:'white',
            height:50,
            marginHorizontal:25,
            borderRadius:80,
            textAlign:"center",
            padding:10,
            width:'90%',
            marginBottom:20,
            justifyContent:"center",
           
},
btnText:{
    color:"white",
    textAlign:"center",
    fontSize:20,
}
});
