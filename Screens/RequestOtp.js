import { StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { primary } from '../color';
import IonIcons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');

const RequestOtp = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <IonIcons           
          name="chevron-back-outline"
          color={"white"}
          size={28}
          style={styles.backIcon}
          onPress={()=>{navigation.goBack()}}
        />
        <Image source={require('../assets/welcome_image.jpg')} style={styles.img}/>
      </View>
      <View>
      <Text style={styles.txt}>
            Request OTP
        </Text>
        <TextInput placeholder="Email" style={styles.input}/>
        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('ChangePassword')}}>
            <Text style={styles.btnText}>
                Send OTP
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RequestOtp

const styles = StyleSheet.create({
    top:{
        height:height*0.25,
        backgroundColor:primary,
        justifyContent:"center"
    },
    img:{
        height:height*0.12,
        width:width*0.25,
        alignSelf:'center'
    },
    backIcon:{
        marginLeft:10
    },
    txt:{
        color:'#586FA2',
        fontSize:28,
        margin:height*0.030,
        fontWeight:'600'
    },
    input:{
        marginHorizontal:height*0.03,
        marginVertical:height*0.045,
        borderWidth:2,
        padding:height*0.030,
        borderRadius:15,
        borderColor:'#586FA2',
        fontSize:18,
        fontWeight:'500',
        color:'gray'
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:primary,
        alignSelf:'center',
        padding:height*0.030,
        width:width*0.8,
        borderRadius:15,
        marginTop:height*0.055

    },
    btnText:{
        color:'#fff',
        fontWeight:'400',
        fontSize:23
    }
})