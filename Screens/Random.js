import { StyleSheet, Text, View,Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { primary } from "../color";
const { width, height } = Dimensions.get('window');
const Random = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.tittle}>
          <View style={styles.tittleIcon}>
            <IonIcons
              name="chevron-back-outline"
              color={"white"}
              size={28}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.tittleText}>
            <Text style={{ fontWeight: 400, fontSize: 16,color:'white' }}>
              Random questions
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{fontSize:42,fontWeight:600,color:'white'}}>01:10</Text>
          <Text>time left</Text>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </SafeAreaView>
  );
};

export default Random;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.2,
    padding: 10,
    backgroundColor: primary,
  },
  bottom: {
    flex: 0.8,
    backgroundColor: "red",
  },
  tittle: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor:'black',

    borderBottomWidth:'1 px'
  },
  tittleText: {
    flex: 0.7,
  },
  tittleIcon: {
    flex: 0.3,
  },
});
