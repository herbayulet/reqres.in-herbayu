import { View, Text, TouchableOpacity, Modal } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import useHomeScreen from "../utils/data/useHomeScreen";

const InputNewUser = () => {
  const {
    firstName,
    lastName,
    email,
    handleEmailChange,
    openModal,
    handleFirstName,
    handleLastName,
  } = useHomeScreen();
  const transparant = "rgba(0,0,0,0.5)";
  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <View
        className={`flex-1 bg-[${transparant}] items-center justify-center`}
      >
        <View>
          <View className="space-y-3 pt-5">
            <TextInput
              inputMode="text"
              label="First Name"
              mode="outlined"
              value={firstName}
              onChangeText={handleFirstName}
            />
            <TextInput
              inputMode="text"
              label="Last Name"
              mode="outlined"
              value={lastName}
              onChangeText={handleLastName}
            />
            <TextInput
              inputMode="text"
              label="Email"
              mode="outlined"
              value={email}
              onChangeText={handleEmailChange}
            />
            <View className="flex-row justify-center">
              <TouchableOpacity
                className="bg-primary p-3 rounded-lg w-40"
                // onPress={handlePresentModal}
              >
                <Text className="text-white text-center text-lg">
                  Tambah User
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputNewUser;
