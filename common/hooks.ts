import { parseCookies } from "nookies";

// Get the stored authentication token
export const GetStoredAuthToken = () => {
    const cookies = parseCookies();
    const storedUser: any = cookies.userToken ? cookies.userToken : null;
    return storedUser;
  };