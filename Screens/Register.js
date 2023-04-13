import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, {useState} from "react";
import { primary } from "../color";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const { width, height } = Dimensions.get('window');

const Register = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <IonIcons
          name="chevron-back-outline"
          color={"white"}
          size={28}
          style={styles.backIcon}
          onPress={()=>{navigation.goBack()}}
        ></IonIcons>
        <Text style={styles.regTxt}>Register</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Country" />
        <TextInput style={styles.input} placeholder="Password" />
        <TextInput style={styles.input} placeholder="Confirm Password" />
      </View>
      <View style={styles.bottomView}>
      <TouchableOpacity style={styles.btn}
      onPress={() =>
        navigation.navigate('Login')
      }
      >
        <Text style={styles.btnText}>
          Confirm
        </Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity style={styles.btngoogle}>

          <Image
            source={require("../assets/google.png")}
            style={{ width: 25, height: 25, margin:5 }}
          />

        <Text style={{ color: "gray", fontSize: 18, fontWeight: 600 }}>
          Continue with google
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: primary,
    flexDirection: "row",
    alignItems: "center",
    width: width*1,
    height:height*0.1
  },
  backIcon: {
    margin: 10,
  },
  regTxt: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 22,
    marginLeft: "25%",
    margin: 10,
  },
  inputContainer:{
   height:height*0.57,
   justifyContent:'space-between',
   marginTop:height*0.02

  },
  input: {
    fontSize: 16,
    color: "grey",
    borderWidth: 2,
    borderColor: "#586FA2",
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 2,
    height:height*0.08,
    paddingLeft:10
  },
  bottomView:{
    paddingTop:height*0.04,
    alignItems:'center',
    height:height*0.25,
    justifyContent:'space-between'
  },
  btn: {
    backgroundColor: primary,
    width: "90%",
    height:height*0.08,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    flexDirection: "column",
  },
  btngoogle: {
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 10,

    width: "90%",
    padding: 14,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    flexDirection: "row",
  },
  btnText:{
    color: "white",
    fontSize: 20, 
    fontWeight: 400 
  },
  or:{
    color: "gray",
    marginTop:height*0.025
  }
});
