import React, { forwardRef, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { TextInput } from "react-native-paper";
import useHomeScreen from "../utils/data/useHomeScreen";
import Layout from "./Layout";

const ModalAddUser = forwardRef((props, ref) => {
  const { firstName, handleFirstName, lastName, handleLastName, email, handleEmailChange } = useHomeScreen();
  const snapPoints = useMemo(() => ['50%'], []);
  const renderBackDrop = useCallback((props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, [])
  const {dismiss} = useBottomSheetModal()
  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints} overDragResistanceFactor={0} backdropComponent={renderBackDrop}>
        <View className="mx-4">
          <View style={{ marginVertical: 10 }}>
            <TextInput
              inputMode="text"
              label="First Name"
              mode="outlined"
              value={firstName}
              onChangeText={handleFirstName}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <TextInput
              inputMode="text"
              label="Last Name"
              mode="outlined"
              value={lastName}
              onChangeText={handleLastName}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <TextInput
              inputMode="text"
              label="Email"
              mode="outlined"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{ backgroundColor: "blue", padding: 10, borderRadius: 10 }}
              onPress={() => {
                dismiss();
                props.addUser();
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Tambah User</Text>
            </TouchableOpacity>
          </View>
        </View>
    </BottomSheetModal>
  );
});

export default ModalAddUser;
