import axios from "axios";
import { GetStoredAuthToken } from "@/common/hooks";
//https://ui62646llb.execute-api.us-east-1.amazonaws.com/prod
 const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001"
 console.log(baseURL,'backend running')
// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: `${baseURL}`,
});

// Add an interceptor to include JWT in request headers if available
api.interceptors.request.use(
  (config:any) => {
    const jwt = GetStoredAuthToken(); // Replace GetStoredAuthToken() with the function to get the JWT from your storage or state

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
