'use client';

import { CreateChatBot } from './CreateChatBot';
import { ChatSheet } from './HamburguerMenu';

export function MainComponent() {
  return (
    <div className="flex min-h-screen  w-full overflow-hidden flex-col items-start justify-start bg-[#000000] text-stone-200 px-5 py-5">
      <ChatSheet />
      <div className="flex flex-col items-center justify-center w-full h-full">
        <CreateChatBot />
      </div>
    </div>
  );
}
