'use client';

import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getChat } from '../../utils/getChats';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ChatSession } from '../../types/ChatSessions';

export function ChatSheet() {
  const { user } = useContext(AuthContext);
  const id = user?.id;

  const [chats, setChats] = useState<ChatSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      if (!id) return;

      try {
        const response = await getChat(id);
        console.log('response =>', response);

        if (Array.isArray(response)) {
          setChats(response);
        } else {
          setChats([]);
        }
      } catch (error) {
        console.error('Erro ao buscar chats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, [id]);

  if (!user) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <h1 className="font-bold text-black text-xl">your chats</h1>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-4">
          {loading ? (
            <p className="text-gray-500">loading...</p>
          ) : chats.length === 0 ? (
            <p className="text-red-500 font-bold p-5">no chats found click in "create one chat"</p>
          ) : (
            chats.map((chat, index) => (
              <div
                key={chat.id || index}
                className="p-2 border rounded bg-gray-100"
              >
                <p className="font-semibold text-stone-200">
                  Bot: {chat.bot?.name}
                </p>
                <p className="font-semibold text-stone-200">
                  context : {chat.context}
                </p>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
