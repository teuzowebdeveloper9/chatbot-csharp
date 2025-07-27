import axios from "axios";
import { HandleRegisterTypes } from "../interfaces/handleRegisterTypes";
import { useRouter } from 'next/navigation';

export const HandleRegister = async ({ Name, Password, Email }: HandleRegisterTypes) => {
  const router = useRouter();
  try {
    const response = await axios.post("http://localhost:5296/api/users/register", {
      Name,
      Password,
      Email,
    });
     if (response.status == 201){
      router.push('/home')
     }
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
