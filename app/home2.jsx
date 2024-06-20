import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import aiIcon from "../assets/images/icons/ai_icon.png";
import profile from "../assets/images/icons/add.png";
import { InputGroup } from "../components/InputGroup";

export default function index() {
  const sampleText = [
    {
      id: 1,
      title:
        "Before building the itinerary, ask for any other information that is needed to build it.",
      type: "system",
    },
    {
      id: 2,
      title:
        "This is the main chat template where the user types in more details about his trip.",
      type: "user",
    },
    {
      id: 3,
      title:
        "Ask specifications like mood, occasions.Follow up questions, verification etc",
      type: "system",
      options: 1,
    },
    {
      id: 4,
      title: "Done!",
      type: "user",
      cornerRadius: true,
    },
  ];

  const feedback = [
    {
      id: 1,
      title: "$",
      active: true,
    },
    {
      id: 2,
      title: "$$",
    },
    {
      id: 3,
      title: "$$$",
    },
    {
      id: 4,
      title: "Relax",
      active: true,
    },
    {
      id: 5,
      title: "Party",
    },
    {
      id: 6,
      title: "Tourism",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.MainLogo}>
        <Image source={aiIcon} style={{ height: 40, width: 40 }} />

        <Text style={styles.Headline}>
          Trip to Seattle with{"\n"}friends!
        </Text>

        <View
          style={styles.Profile}
        >
          <Image source={profile} style={{ height: 30, width: 30 }} />
        </View>
      </View>

      <View
        style={styles.Line}
      ></View>

      <View style={{ padding: 20 }}>
        <View
          style={styles.EditText}
        >
          <Text>Specifications</Text>
          <Text>Edit</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={styles.Date}
          >
            dd/mm/yy - dd/mm/yy
          </Text>

          <Text
            style={styles.Friend}
          >
            Crowd - Friends
          </Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.List}
        data={sampleText}
        renderItem={({ item }, index) => {
          return (
            <View>
              <View
                style={{
                  maxWidth:
                    item.type == "system"
                      ? Dimensions.get("screen").width - 30
                      : Dimensions.get("screen").width * 0.6,
                  borderTopRightRadius: item.cornerRadius == true ? 5 : 20,
                  backgroundColor: item.type == "system" ? "#F2F2F6" : "black",
                  marginLeft: item.type != "system" ? "auto" : 0,...styles.ListBox
                }}
              >
                <Text
                  style={{
                    color: item.type == "system" ? "black" : "white",
                  }}
                >
                  {item.title}
                </Text>
              </View>

              {item.options === 1 ? (
                <View style={{ paddingVertical: 10 }}>
                  <FlatList
                    contentContainerStyle={{ gap: 10 }}
                    data={feedback}
                    renderItem={({ item }, index) => {
                      return (
                        <View
                          style={{
                            backgroundColor:
                              item.active == true ? "#7C62EC" : "white",
                            borderRadius: 15,...styles.ListDone
                            
                          }}
                        >
                          <Text
                            style={{
                              color: item.active == true ? "white" : "#c9c5c5",
                            }}
                          >
                            {item.title}
                          </Text>
                        </View>
                      );
                    }}
                    keyExtractor={(item) => item.id}
                    horizontal
                  />
                </View>
              ) : null}
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => {
          return (
            <View>
              <Text style={styles.Time}>
                Jun 30, 2024, 9:41 AM
              </Text>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View style={{ gap: 5 }}>
              <View
                style={styles.Footer}
              >
                <Text
                  style={styles.FooterTxt}
                >
                  Creating an itinerary.
                </Text>
              </View>

              <View>
                <View
                  style={styles.ButtonBox}
                >
                  <Pressable
                    style={styles.ButtonStyle}
                  >
                    <Text
                      style={styles.ButtonTxt}
                    >
                      View itinerary.
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }}
      />

      <View>
        <InputGroup />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainLogo: { padding: 20, flexDirection: "row", gap: 10 },
  Headline:{ fontSize: 16, fontWeight: "500", flexGrow: 1 },
  Profile:{
    height: 50,
    width: 50,
    backgroundColor: "#F2F2F6",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  Line:{
    width: Dimensions.get("screen").width,
    borderTopWidth: 1.5,
    borderColor: "#e8e8e8",
  },
  EditText:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  Date:{
    borderWidth: 1,
    borderColor: "#F2F2F6",
    borderRadius: 16,
    color: "#c9c5c5",
    padding: 5,
    paddingHorizontal: 10,
  },
  Friend:{
    borderWidth: 1,
    borderColor: "#F2F2F6",
    borderRadius: 16,
    color: "#c9c5c5",
    padding: 5,
    paddingHorizontal: 10,
  },
  List:{
    gap: 10,
    justifyContent: "flex-end",
    padding: 15,
  },
  ListBox:{
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 20
  },
  ListDone:{
    borderColor: "#F2F2F6",
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 15
  },
  Time:{ color: "#c9c5c5", textAlign: "center" },
  
  Footer:{
    borderColor: "#F2F2F6",
    borderWidth: 2,
    backgroundColor: "#F2F2F6",
    width: 200,
    borderRadius: 20,
  },
  FooterTxt:{
    fontSize: 16,
    fontWeight: "500",
    padding: 20,
    textAlign: "center",
  },
  ButtonBox:{
    borderColor: "#F2F2F6",
    borderWidth: 2,
    backgroundColor: "#F2F2F6",
    width: 280,
    borderRadius: 20,
    padding: 10,
  },
  ButtonStyle:{
    borderColor: "#7C62EC",
    backgroundColor: "#7C62EC",
    borderWidth: 2,
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
  },
  ButtonTxt:{
    fontSize: 16,
    fontWeight: "500",
    padding: 10,
    textAlign: "center",
    color: "white",
  }
});
