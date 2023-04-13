import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { primary } from "../color";
import IonIcons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const ChangePassword = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.top}>
        <IonIcons
          name="chevron-back-outline"
          color={"white"}
          size={28}
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image
          source={require("../assets/welcome_image.jpg")}
          style={styles.img}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.txt}>Change Password</Text>
        <TextInput style={styles.input} placeholder="Old password" />
        <TextInput style={styles.input} placeholder="New password" />
        <TextInput style={styles.input} placeholder="Confirm password" />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={() =>
          navigation.navigate('Login')
        } >
          <Text style={styles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  top: {
    height: height * 0.25,
    backgroundColor: primary,
    justifyContent: "center",
  },
  img: {
    height: height * 0.12,
    width: width * 0.25,
    alignSelf: "center",
  },
  backIcon: {
    marginLeft: 10,
  },
  inputContainer: {
    height: height * 0.5,
  },
  txt: {
    color: "#586FA2",
    fontSize: 28,
    margin: height * 0.02,
    fontWeight: "600",
  },
  input: {
    marginHorizontal: height * 0.03,
    marginVertical: height * 0.013,
    borderWidth: 2,
    padding: height * 0.03,
    borderRadius: 15,
    borderColor: "#586FA2",
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: height * 0.03,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primary,
    alignSelf: "center",
    padding: height * 0.03,
    width: width * 0.8,
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 23,
  },
});
