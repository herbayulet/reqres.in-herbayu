import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import useHomeScreen from "../utils/data/useHomeScreen";
import CardUser from "../components/CardUser";
import { AntDesign } from "@expo/vector-icons";
import useDetailScreen from "../utils/data/useDetailScreen";
import InputNewUser from "../components/InputNewUser";
import ButtonHome from "../components/ButtonHome";
import ModalAddUser from "../components/ModalAddUser";

const HomeScreen = () => {
  const {
    users,
    setOpenModal,
    openModal,
    handlePresentModal,
    clearAsyncStorage,
    setNumber,
    addUser,
    handleYesClick,
    handleNoClick,
    isYesClicked,
    isNoClicked
  } = useHomeScreen();
  const { selected, setSelected, userId } = useDetailScreen();

  const bottomSheetRef = useRef(null)
  const bukaModal = () => {
    bottomSheetRef.current?.present()
  }


  return (
    <Layout>
      <ModalAddUser ref={bottomSheetRef} addUser={addUser} />
      <View className=" justify-between items-center flex-row mb-5">
        <Text className="text-primary  font-semibold text-2xl">List User</Text>
        <ButtonHome
          handleButton={handlePresentModal}
          clear={clearAsyncStorage}
          buka={bukaModal}
        />
      </View>
      <View>
        <View className="flex-row items-center justify-evenly mb-5">
          <TouchableOpacity
            onPress={() => {
              setNumber(1);
              handleYesClick()
            }}
            className={`rounded-full p-2 ${isYesClicked ? "bg-main" : "bg-slate-100"}`}
          >
            <Text className={`${isYesClicked? "text-primary" : "text-main"}`}>
              Page 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setNumber(2);
              handleNoClick()
            }}
            className={`rounded-full p-2 ${isNoClicked ? "bg-main" : "bg-slate-100"}`}
          >
            <Text className={`${isNoClicked? "text-primary" : "text-main"}`}>
              Page 2
            </Text>
          </TouchableOpacity>
        </View>
        {users.length > 0 ? (
          <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardUser item={item} selected={setSelected} />
            )}
          />
        ) : (
          <Text> Tidak ada data</Text>
        )}
      </View>
      {openModal && <InputNewUser />}
    </Layout>
  );
};

export default HomeScreen;
