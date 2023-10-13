import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import { SafeAreaView } from "react-native-safe-area-context";
import InputLogin from "../components/InputLogin";
import useAuth from "../utils/useAuth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const {
    email,
    password,
    handleEmailChange,
    handleLogin,
    handlePasswordChange,
    togglePasswordVisibility,
    isPasswordSecure,
  } = useAuth();
  const navigation = useNavigation()
  return (
    <Layout>
      <View className="flex-col justify-center gap-y-8 pt-44">
        <Text className="text-center text-primary text-xl font-semibold">LOGIN</Text>
        <InputLogin
          email={email}
          password={password}
          handleEmailChange={handleEmailChange}
          handleLogin={handleLogin}
          handlePasswordChange={handlePasswordChange}
          isPasswordSecure={isPasswordSecure}
          togglePasswordVisibility={togglePasswordVisibility}
          text={"Login"}
        />
      </View>
        <View className="flex-row items-center justify-center mt-3">
          <Text>Belum memiliki akun?</Text>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Register")}>
          <Text className="text-primary"> Buat akun baru</Text>
          </TouchableWithoutFeedback>
        </View>
    </Layout>
  );
};

export default LoginScreen;
