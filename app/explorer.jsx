import { View, Text, FlatList, Image,  ScrollView } from 'react-native'
import React from 'react'
import aiIcon from '../assets/images/icons/ai_icon.png'
import {InputGroup} from "../components/InputGroup"

export default function App() {
    const sampleText = [
        {
            id: 1,
            title: "I want to plan a trip for 1 month(dd/ mm- dd / mm) to Europe,traveling solo.I want to land in France,visit Italy and fly out of Munich."
        },
        {
            id: 2,
            title: "I want to plan a trip for 1 month(dd/ mm- dd / mm) to Europe,traveling solo.I want to land in France,visit Italy and fly out of Munich."
        },
        {
            id: 3,
            title: "I want to plan a trip for 1 month(dd/ mm- dd / mm) to Europe,traveling solo.I want to land in France,visit Italy and fly out of Munich."
        },
        {
            id: 4,
            title: "I want to plan a trip for 1 month(dd/ mm- dd / mm) to Europe,traveling solo.I want to land in France,visit Italy and fly out of Munich."
        }
    ]
    return (
        <ScrollView>
            <View style={{ paddingTop: 80,alignItems:"center"}}>
            <Image source={aiIcon} style={{ height: 60, width: 60}} />
                <Text style={{ textAlign: "center", fontSize: 20 }}>Let's plan a trip!</Text>
            </View>

            <FlatList
                contentContainerStyle={{
                    gap: 10, marginTop: 340, marginBottom: 20, marginLeft: 10
                }}
                data={sampleText}
                renderItem={({ item },index) => {
                    return (
                        <View style={{ padding: 10, height: 180, width: 140, backgroundColor: "#F2F2F6", borderRadius: 5 }}>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item)=>item.id}

                horizontal
            />

           <InputGroup />
            
        </ScrollView>
    )
}

