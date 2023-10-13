import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetchSingleUser } from "../Service/GetUsers";
import { useNavigation } from "@react-navigation/native";
import useStore from "../zustand";
import { doDeleteUser } from "../Service/DeleteUser";
import { Alert } from "react-native";
import { doUpdateUser } from "../Service/EditUser";

const useDetailScreen = () => {
  const detailUser = useStore((state) => state.detailUser);
  const [selected, setSelected] = useState();
  const [userId, setUserId] = useState([]);
  const [editedFirstName, setEditedFirstName] = useState(
    detailUser?.first_name
  );
  const [editedLastName, setEditedLastName] = useState(detailUser?.last_name);
  const [editedEmail, setEditedEmail] = useState(detailUser?.email);
  const setDetailUser = useStore((state) => state.setDetailUser);

  const navigate = useNavigation();

  const getDetailScreen = async () => {
    let response = await fetchSingleUser(selected);
    if (response.status == 200) {
      setUserId(response?.data?.data);
      setDetailUser(response?.data?.data);
      navigate.navigate("Detail");
    } else {
      setUserId(null);
    }
  };

  const DeleteUser = async (id) => {
    let response = await doDeleteUser(id);
    if (response.status == 204) {
      Alert.alert("Berhasil Dihapus");
      navigate.navigate("Home");
    } else {
      Alert.alert("Gagal");
    }
  };

  const EditUser = async (id) => {
    let response = await doUpdateUser(id, {
      first_name: editedFirstName,
      last_name: editedLastName,
      email: editedEmail,
    })
    if (response?.status == 200) {
      Alert.alert("Berhasil Edit Data User")
      setEditedEmail("")
      setEditedFirstName("")
      setEditedLastName("")
      navigate.navigate("Home")
    }
    else {
      Alert.alert("Gagal");
    }
  }

  useEffect(() => {
    getDetailScreen(selected);
  }, [selected]);

  return {
    selected,
    setSelected,
    userId,
    getDetailScreen,
    DeleteUser,
    EditUser,
    editedEmail,
    editedFirstName,
    editedLastName,
    setEditedEmail,
    setEditedFirstName,
    setEditedLastName,
  };
};
export default useDetailScreen;
