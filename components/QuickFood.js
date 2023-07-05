import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import quickfood from '../data/quickfood'

const QuickFood = () => {

  const data = quickfood;

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Get it quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{ marginVertical: 10, marginRight: 10 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ height: 170, width: 160 }}
              source={{ uri: item.image }}>
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 25,
                  fontWeight: "900",
                  color: "white"
                }}>
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text
              style={{
                marginTop: 10,
                fontSize: 14,
                fontWeight: '500'
              }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 3
              }}>
              <MaterialIcons name="stars" size={24} color="green"/>
              <Text style={{marginLeft: 3, fontSize:15, fontWeight:'400'}}>{item.rating}</Text>
              <Text style={{marginLeft: 3}}>.</Text>
              <Text style={{marginLeft: 3, fontSize:15, fontWeight:'400'}}>{item.time}mins</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default QuickFood

const styles = StyleSheet.create({})