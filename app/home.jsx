import { View, Text, Image, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import aiIcon from '../assets/images/icons/ai_icon.png'
import profile from '../assets/images/icons/add.png'
import {InputGroup} from "../components/InputGroup"

export default function index() {
    const sampleText = [
        {
            id:1,
            titile:"Before building the itinerary, ask for any other information that is needed to build it.",
            type:"system"
        },
        {
            id:2,
            titile:"This is the main chat template where the user types in more details",
            type:"user"

        },
        {
            id:3,
            titile:"Ask specifications like mood, occasions.Follow up questions, verification etc",
            type:"system",
            options:true

        }
    ]
    return (
        <View style={{
            flex:1
        }}>
            <View style={{ padding: 20, flexDirection: "row", gap: 10 }}>

                <Image source={aiIcon} style={{ height: 40, width: 40 }} />

                <Text style={{ fontSize: 16, fontWeight: 500, flexGrow: 1 }}>Trip to Seattle with{"\n"}friends!</Text>

                <View style={{ height: 50, width: 50, backgroundColor: "#F2F2F6", borderRadius: 60, alignItems: "center", justifyContent: "center" }}>
                    <Image source={profile} style={{ height: 30, width: 30 }} />
                </View>
            </View>
            <View style={{ width: Dimensions.get("screen").width, borderTopWidth: 1.5, borderColor: "#e8e8e8" }}></View>
            
            <View style={{padding:20}}>
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginBottom:10}}>
                    <Text>Specifications</Text>
                    <Text>Edit</Text>
                </View>

                <View style={{ flexDirection: "row",gap:10}}>
                    <Text style={{borderWidth:1,borderColor:"#F2F2F6",borderRadius:16,color:"#c9c5c5",padding:5,paddingHorizontal:10}}>dd/mm/yy - dd/mm/yy</Text>

                    <Text style={{borderWidth:1,borderColor:"#F2F2F6",borderRadius:16,color:"#c9c5c5",padding:5,paddingHorizontal:10}}>Crowd - Friends</Text>
                </View>
            </View>

            <View>
                <Text style={{color:"#c9c5c5",textAlign:"center"}}>Jun 30, 2024, 9:41 AM</Text>
            </View>

            <FlatList
            contentContainerStyle={{gap:20,justifyContent:"flex-end",flexGrow:1, padding: 15}}
              data={sampleText}
              renderItem={({item},index)=>{
                return(
                    <View style={{padding:10,width:item.type == "system" ? Dimensions.get("screen").width-30 : Dimensions.get("screen").width * 0.6,borderRadius:20, backgroundColor: item.type == "system" ? "#F2F2F6" :"black", marginLeft:item.type != "system" ? "auto" : 0 }}>

                        <Text  style={{
                            color:item.type == "system" ? "black" : "white",
                        }}>{item.titile}</Text>
                    <View>
                        <Pressable style={{flexDirection:"row"}}>
                            <Text>Cancel</Text>
                            <Text>Done!</Text>
                        </Pressable>
                    </View>
                    </View>
                )
              }}
              keyExtractor={(item)=>item.id}
              
            />

            <View >
            <InputGroup />
            </View>

        </View>
    )
}