import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native";
import { lightBlue, primary } from "../color";

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, justifyContent:'center', alignItems:'center' }}>
          <Image source ={require('../assets/welcome_image.png') } style={styles.img}></Image>
      </View>
      <View style={{ flex: 2,  }}>
        <Text style={styles.welcome_text}>
          Welcome,
        </Text>
        <Text style={styles.txt}>
          Lorem ipsum dolor sit amet, conr ap. Lorem ipsu,consectetur adipiscing
        </Text>
      </View>
      <View style={{ flex: 1,  }} >
        <TouchableOpacity style={styles.btn} 
        onPress={() =>
          navigation.navigate('Register')
        }
        >
          <Text style={styles.btnText}>
            Register
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', alignSelf:'center', margin:20}}>
          <Text style={{color:'#fff',fontWeight:'500'}}>
            Already have an account? 
          </Text>
          <TouchableOpacity style={{marginLeft:5}}  onPress={() =>
          navigation.navigate('Login')
        } >
          <Text style={{color:'darkblue', fontWeight:'500'}}>
            Log in
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    backgroundColor:lightBlue
  },
  img:{
    height:200,
    width:300,
    borderRadius:20
  },
  welcome_text:{
    fontWeight:'bold',
    fontSize:24,
    color:'#fff',
    margin:10
  },
  txt:{
    color:'#fff',
    fontSize:18,
    fontWeight:'400',
    marginLeft:10
  },
  btn:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    alignSelf:'center',
    backgroundColor:primary,
    width:220,
    height:50
  },
  btnText:{
    fontWeight:'600',
    color:'#fff',
    fontSize:20
  }
});
