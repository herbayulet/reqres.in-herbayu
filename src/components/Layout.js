import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout = ({children}) => {
  return (
    <View className="flex-1 bg-white/20">
      <View className="mx-4 pt-4">
        <SafeAreaView>
        <StatusBar style='dark'/>
        {children}
        </SafeAreaView>
      </View>
    </View>
  )
}

export default Layout