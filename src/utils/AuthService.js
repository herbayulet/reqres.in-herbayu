import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "./axios";

export async function doLogin(values){
  let response = axios
    .post(`login`, values)
    .then(async (response) => {
     await AsyncStorage.setItem("token", response?.data?.token)
      return response;
    })
    .catch(function (error) {
      if (error.response) {
        return error.response;
      }
    });

  return response;
}

export async function doRegister(values){
  let response = axios
    .post(`register`, values)
    .then(async (response) => {
     await AsyncStorage.setItem("token", response?.data?.token)
      return response;
    })
    .catch(function (error) {
      if (error.response) {
        return error.response;
      }
    });

  return response;
}