import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import { SafeAreaView } from "react-native-safe-area-context";
import InputLogin from "../components/InputLogin";
import useAuth from "../utils/useAuth";
import { useNavigation } from "@react-navigation/native";
import InputRegister from "../components/InputResgiter";

const ResgiterScreen = () => {
  const {
    email,
    password,
    handleEmailChange,
    handleRegister,
    handlePasswordChange,
    togglePasswordVisibility,
    isPasswordSecure,
  } = useAuth();
  const navigation = useNavigation()
  return (
    <Layout>
      <View className="flex-col justify-center gap-y-8 pt-44">
        <Text className="text-center text-primary text-xl font-semibold">REGISTER</Text>
        <InputRegister
          email={email}
          password={password}
          handleEmailChange={handleEmailChange}
          handleRegister={handleRegister}
          handlePasswordChange={handlePasswordChange}
          isPasswordSecure={isPasswordSecure}
          togglePasswordVisibility={togglePasswordVisibility}
          text={"Register"}
        />
      </View>
        <View className="flex-row items-center justify-center mt-3">
          <Text>Sudah memiliki akun?</Text>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <Text className="text-primary"> Masuk</Text>
          </TouchableWithoutFeedback>
        </View>
    </Layout>
  );
};

export default ResgiterScreen;
