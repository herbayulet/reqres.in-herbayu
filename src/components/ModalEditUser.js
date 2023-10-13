import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { TextInput } from "react-native-paper";
import useStore from "../utils/zustand";
import useDetailScreen from "../utils/data/useDetailScreen";

const ModalEditUser = forwardRef((props, ref) => {
  const { EditUser, editedEmail, editedFirstName, editedLastName, setEditedEmail, setEditedFirstName, setEditedLastName } = useDetailScreen();
  const detailUser = useStore((state) => state.detailUser);
  const snapPoints = useMemo(() => ['50%'], []);
  const renderBackDrop = useCallback((props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []);
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints} overDragResistanceFactor={0} backdropComponent={renderBackDrop}>
      <View style={{ margin: 16 }}>
        <View style={{ marginVertical: 10 }}>
          <TextInput
            inputMode="text"
            label="First Name"
            mode="outlined"
            value={editedFirstName}
            onChangeText={setEditedFirstName}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <TextInput
            inputMode="text"
            label="Last Name"
            mode="outlined"
            value={editedLastName}
            onChangeText={setEditedLastName}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <TextInput
            inputMode="text"
            label="Email"
            mode="outlined"
            value={editedEmail}
            onChangeText={setEditedEmail}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ backgroundColor: "blue", padding: 10, borderRadius: 10 }}
            onPress={() => EditUser(detailUser?.id)}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Edit User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheetModal>
  );
});

export default ModalEditUser;
