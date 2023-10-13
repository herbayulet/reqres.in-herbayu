import { useState } from "react";
import { Alert } from "react-native";
import { doLogin, doRegister } from "./AuthService";
import { useNavigation } from "@react-navigation/native";

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const navigation = useNavigation()
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };

  const handleLogin = async () => {
    const response = await doLogin({
      email: email,
      password: password,
    });
    if (response?.status == 200) {
      setEmail("");
      setPassword("");
      navigation.replace("Home")
      Alert.alert("berhasil");
    } else {
      Alert.alert(
        "gagal"
      );
    }
  };

  const handleRegister = async () => {
    const response = await doRegister({
      email: email,
      password: password,
    });
    if (response?.status == 200) {
      setEmail("");
      setPassword("");
      navigation.replace("Home")
      Alert.alert("berhasil");
    } else {
      Alert.alert(
        "gagal"
      );
    }
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleLogin,
    isPasswordSecure,
    handleRegister
  };
};

export default useAuth;
