import axios from 'axios';

export const GetMessages = async (chatId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5296/api/chat/session/${chatId}/messages`
    );

    return {
      status: response.status,
      messages: response.data,
    };
  } catch (error) {
    console.log(error);
  }
};
