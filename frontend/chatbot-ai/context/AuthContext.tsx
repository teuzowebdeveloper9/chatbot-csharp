'use client';

import { createContext, useEffect, useState } from 'react';
import { AuthContextType } from '../interfaces/AuthContextType';
import { AuthProviderProps } from '../types/AuthProviderProps';
import { UserTypes } from '../interfaces/UserType';
import Cookie from 'js-cookie';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserTypes | null>(null);

  const loadUser = async () => {
    const userCookie = await Cookie.get('user-token');
    if (!userCookie) {
      console.log('you are not logged');
      window.location.href = 'http://localhost:3000/login';
    } else {
      const parsedUser = JSON.parse(userCookie);
      setUser(parsedUser);
      console.log(
        'You are logged in, stay in this state to enjoy the application'
      );
    }
  };

  const loggedUser = async () => {
    const userCookie = await Cookie.get('user-token');

    if (userCookie) {
      console.log(
        'your status is logged in I will redirect you to the home page'
      );
      window.location.href = 'http://localhost:3000/home';
    }
  };

  const signin = async (user: UserTypes) => {
    console.log('logged in');
    await Cookie.set('user-token', JSON.stringify(user), { expires: 10 });
    setUser(user);
  };
  const signOut = async () => {
    await Cookie.remove('user-token');
    setUser(null);
    console.log('you are not logged in');
  };

  return (
    <AuthContext.Provider
      value={{ user, signin, signOut, loadUser, loggedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
