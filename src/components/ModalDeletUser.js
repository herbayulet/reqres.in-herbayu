import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { TextInput } from "react-native-paper";
import useHomeScreen from "../utils/data/useHomeScreen";
import Layout from "./Layout";
import useDetailScreen from "../utils/data/useDetailScreen";
import useStore from "../utils/zustand";

const ModalDeleteUser = forwardRef((props, ref) => {
  const { DeleteUser } = useDetailScreen();
  const detailUser = useStore((state) => state.detailUser);
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackDrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [isNoClicked, setIsNoClicked] = useState(false);

  const handleYesClick = () => {
    setIsYesClicked(true);
    setIsNoClicked(false);
  };

  const handleNoClick = () => {
    setIsYesClicked(false);
    setIsNoClicked(true);
  };

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      backdropComponent={renderBackDrop}
    >
      <View className="flex-col space-y-2 items-center">
        <Text className="text-xl font-semibold text-main">
          Apakah anda ingin menghapus User ini
        </Text>
        <TouchableOpacity
          className={`rounded-full p-2 w-80 ${
            isYesClicked ? "bg-rose-500" : "bg-slate-100"
          }`}
          onPress={() => {
            handleYesClick();
            dismiss();
            DeleteUser(detailUser?.id);
          }}
        >
          <Text
            className={`text-center ${
              isYesClicked ? "text-white" : "text-rose-500"
            }`}
          >
            Ya
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`rounded-full p-2 w-80 ${
            isNoClicked ? "bg-rose-500" : "bg-slate-300"
          }`}
          onPress={() => {
            handleNoClick();
            dismiss();
          }}
        >
          <Text
            className={`text-center ${
              isNoClicked ? "text-white" : "text-rose-500"
            }`}
          >
            Tidak
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default ModalDeleteUser;
