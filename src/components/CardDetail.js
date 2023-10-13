import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import useStore from "../utils/zustand";

const CardDetail = ({buka, edit}) => {
  const detailUser = useStore((state) => state.detailUser);
  return (
    <View className="border border-slate-200 gap-x-1 rounded-xl p-3">
      <View className="flex-col items-center">
        <Image src={detailUser?.avatar} style={{ width: 100, height: 100 }} />
        <View className="flex-col items-center ml-4">
          <View className="gap-x-1 flex-row">
            <Text className="text-lg text-primary font-medium">{detailUser?.first_name}</Text>
            <Text className="text-lg text-primary font-medium">{detailUser?.last_name}</Text>
          </View>
          <Text className="text-lg text-primary font-medium">{detailUser?.email}</Text>
          <TouchableOpacity className="bg-red-500 rounded-xl p-2 w-40 mt-2" onPress={buka}>
            <Text className="text-white font-medium text-center">Hapus</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-primary rounded-xl p-2 w-40 mt-2" onPress={edit}>
            <Text className="text-white font-medium text-center">Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardDetail;
