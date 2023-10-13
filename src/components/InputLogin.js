import { View, Text, TouchableOpacity, Alert } from "react-native";
import * as React from "react";
import { TextInput } from "react-native-paper";

const InputLogin = ({
  email,
  password,
  handleEmailChange,
  handleLogin,
  handlePasswordChange,
  isPasswordSecure,
  togglePasswordVisibility,
  text,
}) => {
  return (
    <View className="space-y-3 pt-5">
      <TextInput
        inputMode="text"
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Masukan Password"
        secureTextEntry={isPasswordSecure}
        value={password}
        onChangeText={handlePasswordChange}
        right={
          <TextInput.Icon
            icon={isPasswordSecure ? "eye-off" : "eye"}
            onPress={togglePasswordVisibility}
          />
        }
      />
      <View className="flex-row justify-center">
        <TouchableOpacity
          className="bg-primary p-3 rounded-lg w-40"
          onPress={handleLogin}
        >
          <Text className="text-white text-center text-lg">{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputLogin;
