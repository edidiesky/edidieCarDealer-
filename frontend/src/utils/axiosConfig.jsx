import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "/api/v1/",
  withCredentials: true,
  // Set your base URL and other Axios configurations if needed
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from the cookie
    const token = Cookies.get(" token");
    console.log(token, "red");
    // Set the token as the Authorization header
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
