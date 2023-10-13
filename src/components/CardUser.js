import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CardUser = ({ item, selected }) => {
  return (
    <View className="mb-3">
      <TouchableOpacity onPress={() => selected(item.id)}>
        <View className="bg-white/25 p-4 rounded-xl ">
          <View className="flex-row gap-x-3 items-center">
            <Image
              src={item?.avatar}
              style={{ width: 35, height: 35 }}
              className="rounded-full"
            />
            <View className="flex-row gap-x-2">
              <Text className="text-primary text-lg">{item?.first_name}</Text>
              <Text className="text-primary text-lg">{item?.last_name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardUser;
