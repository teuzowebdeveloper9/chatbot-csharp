import axios from "axios";
import { HandleRegisterTypes } from "../interfaces/handleRegisterTypes";


export const HandleRegister = async ({ Name, Password, Email }: HandleRegisterTypes) => {
  
  try {
    const response = await axios.post("http://localhost:5296/api/users/register", {
      Name,
      Password,
      Email,
    });

     if(response.status == 201){
         window.location.href = 'http://localhost:3000/home'
    }
    
     console.log(response.status)

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
