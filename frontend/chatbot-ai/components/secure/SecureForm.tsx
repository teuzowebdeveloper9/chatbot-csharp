'use client';

import { useContext, useEffect, useState } from 'react';
import { LoginFormProps } from '../../types/LoginFormProps';
import { MobileLeadingPageIcons } from './MobileLeadingPageIcons';
import { SmallButton } from './SmallButton';
import { HandleLogin } from '../../utils/handleLogin';
import { HandleRegister } from '../../utils/handleRegister';
import { AuthContext } from '../../context/AuthContext';

export function SecureForm({ login, onClick }: LoginFormProps) {
  const [errorMessage, setErrorMessage] = useState('');

  const { signin,loggedUser } = useContext(AuthContext);
  useEffect(() => {
     if (loggedUser) {
      loggedUser();
    }
  }, [])

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <MobileLeadingPageIcons />
      <div className="flex flex-col px-8 py-5 w-[300px] min-h-[350px] bg-[#080736] rounded-md shadow-lg border-2 mb-5 border-solid border-[#000000]">
        {errorMessage && (
          <p className="text-red-500 mb-2 font-bold justify-center items-center flex">
            {errorMessage}
          </p>
        )}
        <h1 className="text-2xl font-bold text-stone-200 justify-center items-center flex">
          {login ? 'login' : 'register'}
        </h1>
        {login ? null : (
          <div>
            <h2 className="text-xl font-bold text-stone-200 justify-center items-center flex mb-2">
              name
            </h2>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="name"
              className="flex justify-center   items-center ml-8 placeholder:text-stone-100 border-solid border-2 border-black mb-2 rounded-md"
            ></input>
          </div>
        )}
        <h2 className="text-xl font-bold text-stone-200 justify-center items-center flex mb-2">
          email
        </h2>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email"
          className="flex justify-center items-center  px-2  ml-8 placeholder:text-stone-100 border-solid border-2 border-black mb-2 rounded-md"
        ></input>
        <h2 className="text-xl font-bold text-stone-200 justify-center items-center flex mb-2 ">
          password
        </h2>
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="password"
          className="flex justify-center items-center ml-8  px-2  placeholder:text-stone-100 border-solid border-2 border-black mb-4 rounded-md"
        ></input>
        <SmallButton
          label={login ? 'login' : 'register'}
          onClick={async () => {
            try {
              if (login) {
                const res = await HandleLogin({
                  Email: form.email,
                  Password: form.password,
                });
                if (res.status == 500) {
                  setErrorMessage('erro nas credencias tente novamente');
                }
                signin(res.data);
              } else {
                const res = await HandleRegister({
                  Email: form.email,
                  Name: form.name,
                  Password: form.password,
                });

                if (res.status == 500) {
                  setErrorMessage('erro nas credencias tente novamente');
                }

                signin(res.data);
              }
            } catch (error) {
              setErrorMessage('não autorizado, tente novamente');
            }
          }}
        />

        <p
          onClick={onClick}
          className="text-sm font-semibold text-stone-200 hover:underline cursor-pointer"
        >
          {login
            ? "if you don't have an account, register"
            : 'if you already have an account, login'}
        </p>
      </div>
    </>
  );
}
