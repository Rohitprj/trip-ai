import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import aiIcon from "../assets/images/icons/ai_icon.png";
import { InputGroup } from "../components/InputGroup";

export default function App() {
  const sampleText = [
    {
      id: 1,
      title:
        "I want to plan a trip for 1 month(dd/ mm- dd / mm) to Europe,traveling solo.I want to land in France,visit Italy and fly out of Munich.",
    },
    {
      id: 2,
      title:
        "I want to plan a trip for 1 month(dd/ mm- dd / mm) to Europe,traveling solo.I want to land in France,visit Italy and fly out of Munich.",
    },
    {
      id: 3,
      title:
        "I want to plan a trip for 1 month(dd/ mm- dd / mm) to Europe,traveling solo.I want to land in France,visit Italy and fly out of Munich.",
    },
    {
      id: 4,
      title:
        "I want to plan a trip for 1 month(dd/ mm- dd / mm) to Europe,traveling solo.I want to land in France,visit Italy and fly out of Munich.",
    },
  ];
  return (
    <View style={styles.Container}>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View style={styles.Logo}>
          <Image source={aiIcon} style={styles.LogoText} />
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Let's plan a trip!
          </Text>

          <FlatList
            contentContainerStyle={styles.sampleTextContainer}
            data={sampleText}
            renderItem={({ item }, index) => {
              return (
                <View style={styles.chatContainer}>
                  <Text>{item.title}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <InputGroup />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  chatContainer: {
    padding: 10,
    height: 180,
    width: 140,
    backgroundColor: "#F2F2F6",
    borderRadius: 5,
  },
  sampleTextContainer: {
    gap: 10,
    marginTop: "auto",
    marginBottom: 20,
    marginLeft: 10,
  },
  Logo: {
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    minHeight: Dimensions.get("window").height - 75,
  },
  LogoText: {
    height: 60,
    width: 60,
  },
});
