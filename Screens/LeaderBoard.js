import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { darkblue, lightBlue, primary } from "../color";
import IonIcons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const LeaderBoard = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonPress = (buttonIndex) => {
    setActiveButtonIndex(buttonIndex);
  };

  const getButtonStyle = (buttonIndex) => {
    if (buttonIndex === activeButtonIndex) {
      return [styles.activeButton, styles.activeButtonText];
    } else {
      return styles.inactiveButton;
    }
  };

  const getButtontext = (buttonIndex) => {
    if (buttonIndex === activeButtonIndex) {
      return styles.activeButtonText;
    } else {
      return styles.inactiveButtonText;
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IonIcons
            name="chevron-back-outline"
            color={"white"}
            size={28}
            onPress={() => {
              navigation.goBack();
            }}
          />

          <Text
            style={{
              color: "white",
              fontWeight: "medium",
              fontSize: 16,
              marginLeft: width * 0.27,
            }}
          >
            LeaderBoard
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={getButtonStyle(0)}
            onPress={() => handleButtonPress(0)}
          >
            <Text style={getButtontext(0)}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle(1)}
            onPress={() => handleButtonPress(1)}
          >
            <Text style={getButtontext(1)}>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle(2)}
            onPress={() => handleButtonPress(2)}
          >
            <Text style={getButtontext(2)}>Monthly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle(3)}
            onPress={() => handleButtonPress(3)}
          >
            <Text style={getButtontext(3)}>All time</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: width * 0.93,
          }}
        >
          <Text style={styles.heading}>Rank</Text>
          <Text style={styles.heading}>name</Text>
          <Text style={styles.heading}>Countery</Text>
          <Text style={styles.heading}>Point</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardtext}>1</Text>
          <Text style={styles.cardtext}>Taimoor hasan</Text>
          <Text style={styles.cardtext}>Pakistan</Text>
          <Text style={styles.cardtext}>1500</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardtext}>1</Text>
          <Text style={styles.cardtext}>Taimoor hasan</Text>
          <Text style={styles.cardtext}>Pakistan</Text>
          <Text style={styles.cardtext}>1500</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({
  top: {
    height: height * 0.19,
    backgroundColor: primary,
   
    padding: 15,
  },

  text: {
    color: primary,
  },
  activeButton: {
    backgroundColor: darkblue,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.21,
    height: height * 0.049,
  },
  inactiveButton: {
    backgroundColor: "#B5C0F9",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.21,
    height: height * 0.049,
  },
  inactiveButtonText: {
    color: primary,
  },
  activeButtonText: {
    color: "white",
  },
  heading: {
    color: "black",
    fontWeight: "bold",
  },
  card: {
    height: height * 0.08,
    alignItems: "center",
    width: width * 0.945,
    marginTop: 10,
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      borderWidth:"1px",
      borderColor:'gray'
  },
  cardtext: {
    fontWeight: "600",
    fontSize: 16,
    color: darkblue,
  },
});
