import axios from "axios";
import { CreateChatType } from "../types/CreateChatType";
import { error } from "console";


export const handleCreateChat =  async ({context,name,userId} : CreateChatType) => {

  try{
    const response = await axios.post('http://localhost:5296/api/chat/create-session',{
      userId,
      name,
      context
    })

    if(response.status == 201){
       window.location.href = `http://localhost:3000/${response.data.id}/chat`;
    }

    return{
      status : response.status,
      data : response.data
    }
  }catch(error){
    console.log(error)
    throw error
  }
}