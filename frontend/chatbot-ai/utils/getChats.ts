import axios from 'axios';

export const getChat = async (userId: number) => {
  try {
    const response = await axios.get(
      `http://localhost:5296/api/chat/chats/message/${userId}`
    );

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.log('no chats on your user');
  }
};
