import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = () => {

    const navigate = useNavigation()

    useEffect(() => {
        setTimeout(() => {
          handleGetToken()
        }, 2000)
    })

    const handleGetToken = async () => {
        const dataToken = await AsyncStorage.getItem("token")
        if (!dataToken) {
            navigate.navigate("Login")
        }
        else {
            navigate.navigate("Home")
        }
    }

  return (
    <View className="flex-1 justify-center items-center mx-5">
     <View className="bg-primary/60 rounded-full">
        <Image source={require("../../assets/logo.png")}/>
     </View>
        <Text className="text-main text-3xl font-semibold text-center mt-5">
            Selamat datang di CRUD App users
        </Text>
    </View>
  )
}

export default SplashScreen