import { View, Text, Image } from "react-native";
import React from "react";
import aiIcon from "../assets/images/icons/ai_icon.png";
import profile from "../assets/images/icons/add.png";

export default function Header({ isIcon = true }) {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Image source={aiIcon} style={{ height: 40, width: 40 }} />

      <Text style={{ fontSize: 16, fontWeight: 500, flexGrow: 1 }}>
        Trip to Seattle with friends!
      </Text>

      {isIcon ? (
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#F2F2F6",
            borderRadius: 60,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={profile} style={{ height: 30, width: 30 }} />
        </View>
      ) : null}
    </View>
  );
}
