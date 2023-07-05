import { StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import { Ionicons } from '@expo/vector-icons';
import MenuItem from '../components/MenuItem';
import hotels from '../data/hotels';

const Home = () => {

    const data = hotels;

    return (
        <ScrollView style={{ marginTop: 40 }}>
            <View style={styles.inputSearch}>
                <TextInput style={styles.textInput} placeholder='Search restaurant' />
                <AntDesign name="search1" size={24} color="#E52B50" />
            </View>
            <Carousel />
            <FoodTypes />
            <QuickFood />

            {/* Filter buttons */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                <Pressable
                    style={{
                        marginHorizontal: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#D0D0D0',
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: 'center',
                        width: 130
                    }}>
                    <Text style={{marginRight: 6}}>Filter</Text>
                    <Ionicons name="filter" size={20} color="black" />
                </Pressable>

                <Pressable
                    style={{
                        marginHorizontal: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#D0D0D0',
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: 'center',
                        width: 130
                    }}>
                    <Text>Sort By Rating</Text>
                </Pressable>

                <Pressable
                    style={{
                        marginHorizontal: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#D0D0D0',
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: 'center'
                    }}>
                    <Text>Sort By Price</Text>
                </Pressable>
            </View>

            {data.map((item,index) => (
                <MenuItem key={index} item={item}/>
            ))}
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    inputSearch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderColor: "#C0C0C0",
        borderRadius: 7
    },
    textInput: {
        fontSize: 17
    },
})