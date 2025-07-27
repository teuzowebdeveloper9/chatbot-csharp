import axios from 'axios';
import { HandleLoginTypes } from '../interfaces/HandleLoginTypes';
import { formLoginType } from '../interfaces/FormLoginType';
import { error } from 'console';

export const HandleLogin = async ({ Email, Password }: HandleLoginTypes) => {
  try {
    const response = await axios.post('http://localhost:5296/api/users/login', {
      Email,
      Password,
    });

    if (response.status == 200) {
      window.location.href = 'http://localhost:3000/home';
    }

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
