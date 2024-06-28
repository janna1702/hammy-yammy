import axios from "axios";

export const hamsterService = axios.create({
  baseURL: "http://84.252.140.218:8080",
  timeout: 10000,
});

hamsterService.interceptors.request.use(
  (config) => {
    // Get the access token from the cookie
    // const token = Cookies.get("accessToken");
    // console.log(token);

    // If the token exists, set it in the Authorization header
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    // If there's an error in the request configuration, you can handle it here
    return Promise.reject(error);
  }
);
