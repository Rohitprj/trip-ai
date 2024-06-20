import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import Map from "../assets/images/icons/map.png";
import Header from "../components/Header";
import schedule1 from "../assets/images/icons/schedule1.png";
import schedule2 from "../assets/images/icons/schedule2.png";
import schedule3 from "../assets/images/icons/schedule3.png";

export default function home3() {
  const Days = [
    {
      id: 1,
      title: "DAY 1",
      click: true,
    },
    {
      id: 2,
      title: "DAY 2",
    },
    {
      id: 3,
      title: "DAY 3",
    },
    {
      id: 4,
      title: "DAY 4",
    },
    {
      id: 5,
      title: "DAY 5",
    },
    {
      id: 6,
      title: "DAY 6",
    },
    {
      id: 7,
      title: "DAY 7",
    },
    {
      id: 8,
      title: "DAY 8",
    },
    {
      id: 9,
      title: "DAY 9",
    },
    {
      id: 10,
      title: "DAY 10",
    },
  ];

  const Time = [
    {
      id: 1,
      title: "06 AM",
    },
    {
      id: 2,
      title: "08 AM",
    },
    {
      id: 3,
      title: "10 AM",
    },
    {
      id: 4,
      title: "12 PM",
    },
    {
      id: 5,
      title: "02 PM",
    },
    {
      id: 6,
      title: "04 PM",
    },
    {
      id: 7,
      title: "06 PM",
    },
    {
      id: 8,
      title: "08 PM",
    },
    {
      id: 9,
      title: "10 PM",
    },
  ];

  const scheduleDetails = [
    {
      id: 1,
      title: "Breakfast at Hotel",
      options: "Food Preferences",
      image: schedule1,
      comp: "Active",
    },
    {
      id: 2,
      title: "Space Needle",
      subTitle: "Reservation Required",
      options: "Alternate options",
      image: schedule2,
      type: "Tourism",
    },
    {
      id: 3,
      title: "South Lake Union",
      options: "Alternate options",
      image: schedule3,
      type: "Relax",
    },
  ];

  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.MainView}>
        <Image source={Map} style={styles.MapImg} />

        <View style={styles.SecView}>
          <Header isIcon={false} />

          <View style={styles.Line}></View>

          <FlatList
            contentContainerStyle={styles.DayList}
            data={Days}
            renderItem={({ item }, index) => {
              return (
                <View
                  style={{
                    borderColor: item.click == true ? "#7C62EC" : "#F2F2F6",
                    backgroundColor: item.click == true ? "#7C62EC" : "#F2F2F6",
                    ...styles.DayCount,
                  }}
                >
                  <Text
                    style={{ color: item.click == true ? "white" : "grey" }}
                  >
                    {item.title}
                  </Text>
                </View>
              );
            }}
            horizontal
          />

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 70,
                alignItems: "center",
              }}
            >
              {Time.map((item) => (
                <View style={{ height: 40 }} key={item.id}>
                  <Text style={{ fontWeight: 500 }}>{item.title}</Text>
                </View>
              ))}
            </View>

            <View
              style={{
                flex: 1,
                paddingRight: 5,
              }}
            >
              <FlatList
                contentContainerStyle={{ gap: 10 }}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                data={scheduleDetails}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        backgroundColor:
                          item.comp == "Active" ? "#ECE7FF" : "#f6f6f6",
                        ...styles.List,
                      }}
                    >
                      <Image style={styles.ListImg} source={item.image} />

                      <View
                        style={{
                          flexGrow: 1,
                        }}
                      >
                        <Text style={{ fontWeight: 600, fontSize: 13 }}>
                          {item.title}
                        </Text>

                        <Text style={{ fontSize: 11 }}>{item.subTitle}</Text>
                        <Text style={styles.ListOpt}>{item.options}</Text>
                      </View>

                      {item.type ? (
                        <Text style={styles.ListBtn}>{item.type}</Text>
                      ) : null}
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    height: Dimensions.get("screen").height,
  },
  MainView: {
    flex: 1,
    height: Dimensions.get("screen").height,
    paddingBottom: 20,
  },
  MapImg: {
    marginLeft: 10,
    width: Dimensions.get("screen").width - 20,
    objectFit: "contain",
    height: ((Dimensions.get("screen").width - 20) * 9) / 16,
  },
  SecView: {
    borderRadius: 10,
    paddingVertical: 10,
    width: Dimensions.get("screen").width - 20,
    marginLeft: 10,
    backgroundColor: "white",
    elevation: 10,
  },
  Line: {
    width: Dimensions.get("screen").width,
    borderTopWidth: 1.5,
    borderColor: "#e8e8e8",
  },
  DayList: {
    gap: 10,
    paddingVertical: 15,
    paddingLeft: 70,
  },
  DayCount: {
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  List: {
    flexDirection: "row",
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: "flex-start",
    gap: 8,
    paddingHorizontal: 8,
  },
  ListImg: {
    borderRadius: 5,
    height: 50,
    width: 50,
    objectFit: "contain",
  },
  ListOpt: {
    fontWeight: "600",
    color: "#7C62EC",
    fontSize: 13,
  },
  ListBtn: {
    fontSize: 11,
    backgroundColor: "#000",
    padding: 5,
    paddingHorizontal: 10,
    color: "#fff",
    height: 25,
    borderRadius: 20,
  },
});
