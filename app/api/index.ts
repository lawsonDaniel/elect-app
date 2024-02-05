import axios from "axios";
import { getAuthUser } from "@/util/auth";


 const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://unijoselectelcet.onrender.com/"
 console.log(baseURL,'backend running')
 const authUser:any = getAuthUser()
 
// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: `${baseURL}`,
});

// Add an interceptor to include JWT in request headers if available
api.interceptors.request.use(
  (config:any) => {
    const jwt = authUser?.token; // Replace GetStoredAuthToken() with the function to get the JWT from your storage or state

    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }

    return config;
  },
  (error:any) => {
    return Promise.reject(error);
  }
);

// Add an interceptor to handle response errors
api.interceptors.response.use(
  (response:any) => {
    return response;
  },
  (error:any) => {
    if (error.response) {
      const { status, data } = error.response;
      if (
        status === 401 &&
        data.message === "An error occurred - Token Expired"
      ) {
        // Token has expired, redirect to the login page
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
