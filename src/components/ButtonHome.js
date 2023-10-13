import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ButtonHome = ({ handleButton, clear, buka }) => {
  return (
    <View className="gap-x-2 flex-row items-center">
      <TouchableOpacity onPress={buka}>
        <View className="flex-row items-center bg-main rounded-2xl p-2">
          <AntDesign name="adduser" size={24} color="#4D17E2" />
          <Text className="text-primary">Add User</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={clear}>
        <View className="flex-row items-center bg-red-500 rounded-2xl p-2">
          <AntDesign name="logout" size={24} color="white" />
          <Text className="text-white ml-1">Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonHome;
