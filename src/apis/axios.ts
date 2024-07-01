import axios, { AxiosError } from "axios";
import Config from "react-native-config";
import EncryptedStorage from "react-native-encrypted-storage";

const createInstance = () => {
  const instance = axios.create({
    baseURL: Config.SERVER_BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    async request => {
      const accessToken = await EncryptedStorage.getItem("accessToken");
      request.headers.Authorization = `Bearer ${accessToken}`;
      return request;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export const instance = createInstance();
