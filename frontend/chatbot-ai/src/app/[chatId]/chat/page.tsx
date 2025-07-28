'use client';

import { use, ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { FaBrain } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { GetMessages } from '../../../../utils/getMessage';
import UserMessage from '../../../../components/chat/UserMessage';
import BotMessage from '../../../../components/chat/BotMessage';
import { handleChat } from '../../../../utils/handleChat';
import { useRouter } from 'next/navigation';

export default function ChatPage({ params }: { params: { chatId: string } }) {
  const { chatId } = params;
  const auth = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [digitable, setdigitable] = useState('');
  
  const router = useRouter()

  useEffect(() => {
    if (auth?.loadUser) {
      auth.loadUser();
    }

    async function fetchMessages() {
      const { messages } = await GetMessages(chatId);
      setMessages(messages);
    }

    fetchMessages();
  }, [chatId]);

  async function reload() {
  const { messages } = await GetMessages(chatId);
  setMessages(messages);
}

  function handleChangeText(event: ChangeEvent<HTMLTextAreaElement>): void {
    event.preventDefault();
    setdigitable(event.target.value);
  }

  return (
    <div className="flex flex-col w-full h-screen bg-[#1F1F1F] justify-start items-center px-5 py-7">
      <div className="w-full px-2 py-2 flex flex-row mb-2 justify-around border-b-2 border-stone-200">
        <p className="text-sm font-light text-stone-200">id: {chatId}</p>
        <FaBrain className="text-stone-200" />
      </div>

      <div className="max-h-[400px]  w-full overflow-y-auto space-y-4 p-4">
        {messages && messages.length > 0 ? (
          messages.map((msg: any, index: number) =>
            msg.role === 'user' ? (
              <UserMessage key={index} content={msg.content} />
            ) : (
              <BotMessage key={index} content={msg.content} />
            )
          )
        ) : (
          <p className="text-red-500">no messages</p>
        )}
      </div>

      <div className="fixed bottom-0 mb-2 mx-3 my-4 w-screen">
        <div className="flex flex-row items-center justify-center">
          <textarea
            value={digitable}
            onChange={handleChangeText}
            placeholder="ask me a question ..."
            className="w-[70%] text-stone-200 px-6 py-4 rounded-lg bg-[#131212] placeholder:text-sm placeholder:text-center placeholder:mt-8 placeholder:text-stone-200 ml-10"
          />
          <IoSend
            size={25}
            className="text-stone-200 mt-11 ml-6 mb-6"
            onClick={async () => {
              const response = await handleChat({
                chatId,
                userMessage: digitable,
              });
              setdigitable('');
              reload();
            }}
          />
        </div>
      </div>
    </div>
  );
}
