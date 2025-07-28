import axios from 'axios';
import { SendMessageType } from '../types/SendMessageType';

export async function handleChat({ chatId, userMessage }: SendMessageType) {
  try {
    const response = await axios.post(
      `http://localhost:5296/api/chat/${chatId}/chat/messages`,
      userMessage,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro no handleChat:', error);
  }
}
