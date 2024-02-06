import { Manager } from "socket.io-client";
import { getAuthUser } from "@/util/auth";

// Get the base URL from the environment variable or use a default value
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

// Create a socket manager instance
const manager = new Manager(baseURL, {
  autoConnect: true,
});

// Get the authenticated user and token
const authUser:any = getAuthUser();
const jwt = authUser?.token;

// Create a socket instance with authentication
export const Socket = manager.socket("/", {
  auth: {
    token: jwt,
  },
});

// Open the socket connection
manager.open((err:any) => {
  if (err) {
    // An error occurred during the connection attempt
    console.error("Error opening socket connection:", err?.message);
  } else {
    // The connection was successfully established
    console.log("Socket connection established successfully");
  }
});
