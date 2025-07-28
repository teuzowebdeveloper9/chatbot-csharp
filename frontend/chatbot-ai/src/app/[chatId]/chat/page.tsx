'use client'

import {use, useContext, useEffect } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { ChatSheet } from "../../../../components/main/HamburguerMenu";
import { FaBrain } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function ChatPahe({params} : {params : {chatId : string}}){

  const {chatId} = use(params)

  const auth = useContext(AuthContext);
  
    useEffect(() => {
      if (auth?.loadUser) {
        auth.loadUser();
      }
    }, []);
  

  return(
    <div className="flex flex-col w-full h-screen  bg-[#1F1F1F] justify-start items-center px-5 py-7 ">
       <div className="w-full px-2 py-2 flex flex-row mb-2 justify-around border-solid border-b-2 border-stone-200">
          <p className="text-sm font-light text-stone-200 "> id : {chatId}</p>
          <FaBrain className="text-stone-200"/>
       </div>
       <div className="max-h-[600px] max-w-[250px] md:max-w-[750px] overflow-y-auto break-words">
          oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooioioioi
       </div>
       <div className="fixed bottom-0 mb-2 mx-3 my-4  w-screen">
        <div className="flex flex-row items-center justify-center">
       <input
        placeholder="ask me a question ..."
        className="w-[70%] text-stone-200 px-6 py-4 rounded-lg bg-[#131212] placeholder:text-sm placeholder:text-stone-200 justify-center items-center flex ml-10"
       />
        <IoSend size={25} className="text-stone-200 mt-11 ml-6 mb-6"/>
       </div>
     </div>

    </div>
  )
}