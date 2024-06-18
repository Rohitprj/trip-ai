import { View,  TextInput, Image, Dimensions,  } from 'react-native'
import React from 'react'
import mick from '../assets/images/icons/voice.png'
import image from '../assets/images/icons/image.png'


export function InputGroup(){
    return(
        <View style={{ marginLeft: 10, width: Dimensions.get("screen").width - 20, borderColor: "#F2F2F6", borderWidth: 1, borderRadius: 5, flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 10, gap: 10, paddingHorizontal: 10 }}>

        <TextInput multiline style={{ height: 40, borderRadius: 5, flexGrow: 1 }} />

        <Image source={mick} style={{ height: 30, width: 30 }} />
        <Image source={image} style={{ height: 25, width: 25 }} />
    </View>
    )
}