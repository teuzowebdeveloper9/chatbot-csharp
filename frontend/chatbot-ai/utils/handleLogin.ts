import axios from "axios";
import { HandleLoginTypes } from "../interfaces/HandleLoginTypes";
import { useRouter } from 'next/navigation';

export const HandleLogin = async ({Email,Password} : HandleLoginTypes) => {
   const router = useRouter();
   try{

    const response = await axios.post('http://localhost:5296/api/users/login', {
      Email,
      Password,
    });
      if (response.status == 200){
         router.push('/home');
      }

      return {
        status : response.status,
        data : response.data,
      }
    }
   catch(error) {
       console.error("Login failed:", error);
       throw error;
   }
}