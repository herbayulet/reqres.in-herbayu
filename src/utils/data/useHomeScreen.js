import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetchListUsers } from "../Service/GetUsers";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { postAddUser } from "../Service/AddUser";
import { Alert } from "react-native";

const useHomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(false);
  const [number, setNumber] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [isNoClicked, setIsNoClicked] = useState(false);
  const navigation = useNavigation();

  const handleYesClick = () => {
    setIsYesClicked(true);
    setIsNoClicked(false);
  };

  const handleNoClick = () => {
    setIsYesClicked(false);
    setIsNoClicked(true);
  };

  const handleFirstName = (text) => {
    setFirstName(text);
  };

  const handleLastName = (text) => {
    setLastName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePresentModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Login");
    } catch (error) {}
  };

  // Mendapatkan list user
  const getUser = async () => {
    let response = await fetchListUsers(number);
    if (response?.status == 200) {
      setUsers(response?.data?.data);
    } else {
      setUsers(response);
    }
  };

  const addUser = async () => {
    let response = await postAddUser({
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
    if (response?.status == 200) {
      setFirstName("");
      setLastName("");
      setEmail("");
      Alert.alert("Berhasil menambahkan user baru");
    } else {
      Alert.alert("Gagal");
    }
  };

  useEffect(() => {
    getUser();
  }, [number]);

  return {
    users,
    firstName,
    lastName,
    email,
    openModal,
    setOpenModal,
    active,
    setActive,
    number,
    setNumber,
    handleEmailChange,
    handleFirstName,
    handleLastName,
    handlePresentModal,
    clearAsyncStorage,
    addUser,
    isYesClicked,
    isNoClicked,
    handleYesClick,
    handleNoClick
  };
};

export default useHomeScreen;
