export interface ChatSession {
  id: string;
  userId: number;
  bot: {
    name: string;
    context: string;
  };
  messages: Message[];
}

export interface Message {
  role: 'user' | 'bot';
  content: string;
}
