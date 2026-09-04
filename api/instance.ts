import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create();

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("보낸 토큰", config.headers.Authorization);

  return config;
});
