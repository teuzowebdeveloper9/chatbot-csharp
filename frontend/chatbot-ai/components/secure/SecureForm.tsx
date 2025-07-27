import { LoginFormProps } from '../../types/LoginFormProps';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';
import { LuBrain } from 'react-icons/lu';
import { MobileLeadingPageIcons } from './MobileLeadingPageIcons';

export function SecureForm({ login, onClick }: LoginFormProps) {
  return (
    <>
      <MobileLeadingPageIcons />
      <div className="flex flex-col px-3 py-5 w-[300px] min-h-[350px] bg-[#080736] rounded-md shadow-lg border-2 mb-5 border-solid border-[#000000]">
        <h1 className="text-2xl font-bold text-stone-200 justify-center items-center flex">
          {login ? 'login' : 'register'}
        </h1>
        <p
          onClick={onClick}
          className="text-sm font-bold text-stone-200 hover:underline cursor-pointer"
        >
          {login
            ? "if you don't have an account, register"
            : 'if you already have an account, login'}
        </p>
      </div>
    </>
  );
}
