import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import FoodItem from '../components/FoodItem';


const Menu = () => {

    const route = useRoute();
    const navigation = useNavigation();

    return (
        <ScrollView style={{ marginTop: 50 }}>
            <View
                style={{
                    height: 300,
                    backgroundColor: '#B0C4DE',
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 10
                    }}
                >
                    <Ionicons
                        onPress={() => navigation.navigate('Home')}
                        name="arrow-back"
                        size={24}
                        color="black"
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <AntDesign name="search1" size={24} color="black" />
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600',
                                marginLeft: 7
                            }}
                        >
                            Search
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 210,
                        marginHorizontal: 20,
                        marginVertical: 5,
                        padding: 10,
                        borderRadius: 15
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>{route.params.name}</Text>
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <Ionicons style={{ marginRight: 10 }} name="share-social" size={24} color="gray" />
                            <AntDesign name="hearto" size={24} color="gray" />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 3
                        }}>
                        <MaterialIcons name="stars" size={24} color="green" />
                        <Text style={{ marginLeft: 3, fontSize: 18, fontWeight: '400' }}>{route.params.rating}</Text>
                        <Text style={{ marginLeft: 3 }}>.</Text>
                        <Text style={{ marginLeft: 3, fontSize: 18, fontWeight: '400' }}>{route.params.time}mins</Text>
                    </View>
                    <View>
                        <Text style={{ marginTop: 7, fontSize: 15, color: 'gray' }}>{route.params.cuisines}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 12
                        }}
                    >
                        <Text style={{ fontSize: 15, fontWeight: '600', marginRight: 22 }}>Outlet</Text>
                        <Text style={{ fontSize: 15, color: 'gray' }}>{route.params.adress}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 12
                        }}
                    >
                        <Text style={{ fontSize: 15, fontWeight: '600', marginRight: 10 }}>22 mins</Text>
                        <Text style={{ fontSize: 15, color: 'gray' }}>Home</Text>
                    </View>
                    <Text style={{ borderColor: 'gray', borderWidth: 0.6, height: 1, marginTop: 12 }}></Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 5,
                        }}>
                        <MaterialIcons style={{ marginRight: 10 }} name="directions-bike" size={24} color="orange" />
                        <Text style={{ color: 'gray', marginRight: 10 }}>0-3 Kms |</Text>
                        <Text style={{ fontWeight: 'bold' }}>35 Delivery Fee will apply</Text>
                    </View>
                </View>
            </View>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 17,
                    fontWeight: '500',
                    marginTop: 10
                }}
            >
                MENU
            </Text>
            <Text
                style={{
                    borderColor: 'gray',
                    borderWidth: 0.6,
                    height: 1,
                    marginTop: 12,
                }}>   
            </Text>
            {route.params.menu.map((item, index) => (
                <FoodItem item={item} index={index}></FoodItem>
            ))}
        </ScrollView>
    )
}

export default Menu

const styles = StyleSheet.create({})