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
        "This is the main chat template where the user types in more details",
      type: "user",
    },
    {
      id: 3,
      title:
        "Ask specifications like mood, occasions.Follow up questions, verification etc",
      type: "system",
      options: true,
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
    <View style={styles.view}>
      <View style={styles.Logo}>
        <Image source={aiIcon} style={styles.LogoImg} />

        <Text style={styles.Headline}>Trip to Seattle with{"\n"}friends!</Text>

        <View style={styles.AddProfile}>
          <Image source={profile} style={{ height: 30, width: 30 }} />
        </View>
      </View>
      <View style={styles.Line}></View>

      <View style={{ padding: 20 }}>
        <View style={styles.Edit}>
          <Text>Specifications</Text>
          <Text>Edit</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={styles.Date}>dd/mm/yy - dd/mm/yy</Text>

          <Text style={styles.Friend}>Crowd - Friends</Text>
        </View>
      </View>

      <View>
        <Text style={styles.Date}>Jun 30, 2024, 9:41 AM</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.ChatList}
        data={sampleText}
        renderItem={({ item }, index) => {
          return (
            <View
              style={{
                width:
                  item.type == "system"
                    ? Dimensions.get("screen").width - 30
                    : Dimensions.get("screen").width * 0.6,
                backgroundColor: item.type == "system" ? "#F2F2F6" : "black",
                marginLeft: item.type != "system" ? "auto" : 0,
                ...styles.List,
              }}
            >
              <Text
                style={{
                  color: item.type == "system" ? "black" : "white",
                }}
              >
                {item.title}
              </Text>

              {item.options == true ? (
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Pressable style={styles.cancelBtn}>
                    <Text style={{ textAlign: "center" }}>Cancel</Text>
                  </Pressable>

                  <Pressable style={styles.DoneBtn}>
                    <Text style={{ textAlign: "center" }}>Done!</Text>
                  </Pressable>
                </View>
              ) : null}
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />

      <View style={{ padding: 15 }}>
        <FlatList
          contentContainerStyle={{ gap: 10 }}
          data={feedback}
          renderItem={({ item }, index) => {
            return (
              <View
                style={{
                  backgroundColor: item.active == true ? "#7C62EC" : "white",
                  ...styles.SearchBtn,
                }}
              >
                <Text
                  style={{ color: item.active == true ? "white" : "#c9c5c5" }}
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

      <View>
        <InputGroup />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  Logo: { padding: 20, flexDirection: "row", gap: 10 },
  LogoImg: { height: 40, width: 40 },
  Headline: { fontSize: 16, flexGrow: 1, fontWeight: "600" },
  AddProfile: {
    height: 50,
    width: 50,
    backgroundColor: "#F2F2F6",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  Line: {
    width: Dimensions.get("screen").width,
    borderTopWidth: 1.5,
    borderColor: "#e8e8e8",
  },
  Edit: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  Date: {
    borderWidth: 1,
    borderColor: "#F2F2F6",
    borderRadius: 16,
    color: "#c9c5c5",
    padding: 5,
    paddingHorizontal: 10,
  },
  Friend: {
    borderWidth: 1,
    borderColor: "#F2F2F6",
    borderRadius: 16,
    color: "#c9c5c5",
    padding: 5,
    paddingHorizontal: 10,
  },
  Date: { color: "#c9c5c5", textAlign: "center" },
  ChatList: {
    gap: 20,
    justifyContent: "flex-end",
    flexGrow: 1,
    padding: 15,
  },
  List: {
    padding: 10,

    borderRadius: 20,
  },
  cancelBtn: {
    fontWeight: 600,
    padding: 30,
    flexGrow: 1,
  },
  DoneBtn: {
    fontWeight: 600,
    padding: 30,
    flexGrow: 1,
  },
  SearchBtn: {
    borderRadius: 15,
    borderColor: "#F2F2F6",
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 15,
  },
});
