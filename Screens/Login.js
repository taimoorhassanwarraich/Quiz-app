import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { primary } from "../color";
import { useState } from "react";
import IonIcons from "react-native-vector-icons/Ionicons";


const Login = ({navigation}) => {
  const [isFocused, setIsFocused] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View>
        <IonIcons           
          name="chevron-back-outline"
          color={"white"}
          size={28}
          style={styles.backIcon}
          onPress={()=>{navigation.goBack()}}
        />
        </View>
        <View style={{ flex: 1, alignItems: "center",justifyContent:'center' }}>
          <Image
            source={require("../assets/welcome_image.jpg")}
            style={{ width: 100, height: 100, borderRadius: 5 }}
          ></Image>
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.middleTxt}>Welcome back,</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="email" size={20} color={'#1C33B8'} />
          <TextInput
            style={[
              styles.input,
              { width: "100%", borderColor: "transparent" },
            ]}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock" size={20} color={'#1C33B8'} />
          <TextInput
            style={[
              styles.input,
              { width: "100%", borderColor: "transparent" },
            ]}
            placeholder="Password"
          />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text
          onPress={()=>{navigation.navigate('RequestOtp')}}
            style={{
              color: "gray",
              marginTop: 10,
              fontSize: 14,
              fontWeight: 600,
              marginRight:17
            }}
          >
            Forgot password?
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btn} onPress={() =>
          navigation.navigate('Dashboard')
        }>
          <Text style={{ color: "white", fontSize: 20, fontWeight: 400 }}>
            Sign in
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "gray", margineTop: 10 }}>OR</Text>
        <TouchableOpacity style={styles.btngoogle}>
          <View style={{ paddingRight: 10, justifyContent:'center' }}>
            <Image
              source={require("../assets/google.png")}
              style={{ width: 25, height: 25 }}
            ></Image>
          </View>
          <Text style={{ color: "gray", fontSize: 18, fontWeight: 600, }}>
            Continue with google
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", margineTop: 20 }}>
          <Text style={{ fontSize: 14 }}>Dont't have an account?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
            <Text
            
              style={{
                color: '#1C33B8',
                paddingLeft: 5,
                fontSize: 14,
                fontWeight:'500',
              
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
const color = "blue";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1.8,
    padding: 10,
    backgroundColor: "#496BFF",
  },
  middle: {
    flex: 3,
    padding: 20,
  },
  middleTxt: {
    fontSize: 28,
    fontWeight: 600,
    color: '#586FA2',
  },
  bottom: {
    flex: 3,
    padding: 15,
    alignItems: "center",
  },
  img: {
    width: 20,
    height: 20,
  },
  input: {
    fontSize: 16,
    color: "grey",
    marginLeft: 10,
    borderWidth: 1,
  },

  inputContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: '#586FA2',
    borderRadius: 10,
    padding: 17,
    marginTop: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    width:'95%',
    alignSelf:'center',

  },
  btn: {
    backgroundColor: primary,
    marginBottom: 15,
    marginTop: 10,
    width: "90%",
    padding:17,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    flexDirection: "column",

  },
  btngoogle: {
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 10,
    marginTop: 10,
    width: "90%",
    padding:17,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "flex-start",

    borderRadius: 10,
    flexDirection: "row",
  },
});
