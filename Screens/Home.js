import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { darkblue, extralightblue, lightBlue, primary } from "../color";
import IonIcons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");
const Home = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.4, padding: 15 }}>
        <View>
          <Text
            style={{ fontSize: "32px", fontWeight: "600", color: darkblue }}
          >
            Start your quiz now..
          </Text>
        </View>
        <TouchableOpacity style={[styles.card, { marginTop: 15 }]}>
          <Text style={{ color: darkblue, fontSize: 18, fontWeight: "medium" }}>
            Quick quiz
          </Text>
          <IonIcons
            name="chevron-forward-outline"
            color={"white"}
            size={28}
            style={{ color: darkblue }}
            onPress={() => {
             
            }}
          />
        </TouchableOpacity>
        <View style={styles.picker}>
          <View>
            <Text style={{fontWeight:'600',fontSize:18}}>Select category</Text>
          </View>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
           style={styles.menu} 
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="C++" value="cpp" />
            <Picker.Item label="C#" value="csharp" />
          </Picker>
        </View>
      </View>
      <View style={{ flex: 0.6, padding: 15 }}>
        <View>
          <Text
            style={{ fontSize: "22px", fontWeight: "600", color: darkblue }}
          >
            Start your quiz now..
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.card, { marginTop: 15, backgroundColor: lightBlue }]}
        >
          <Text style={{ color: darkblue, fontSize: 18, fontWeight: "medium" }}>
            Random question
          </Text>
          <IonIcons
            name="chevron-forward-outline"
            color={"white"}
            size={28}
            style={{ color: darkblue }}
            onPress={() => {}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { marginTop: 15, backgroundColor: "#FCFE77" }]}
        >
          <Text style={{ color: darkblue, fontSize: 18, fontWeight: "medium" }}>
            Unattempted Questions
          </Text>
          <IonIcons
            name="chevron-forward-outline"
            color={"white"}
            size={28}
            style={{ color: darkblue }}
            onPress={() => {}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { marginTop: 15, backgroundColor: "#71FF97" }]}
        >
          <Text style={{ color: darkblue, fontSize: 18, fontWeight: "medium" }}>
            Continue Learning
          </Text>
          <IonIcons
            name="chevron-forward-outline"
            color={"white"}
            size={28}
            style={{ color: darkblue }}
            onPress={() => {}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { marginTop: 15, backgroundColor: "#FF8383" }]}
        >
          <Text style={{ color: darkblue, fontSize: 18, fontWeight: "medium" }}>
            Revision
          </Text>
          <IonIcons
            name="chevron-forward-outline"
            color={"white"}
            size={28}
            style={{ color: darkblue }}
            onPress={() => {}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: "1px",
    borderColor: "gray",
    borderRadius: 15,
    backgroundColor: extralightblue,
  },
  picker: {
   
  
    
  },
  menu:{
    padding:15,
    borderRadius:10
    ,
    marginTop:10,
    borderWidth: "1px",
    borderColor: "gray",
    height:height*.08
  },
  pickertext: {
    fontSize: 20,
   
  },
});
