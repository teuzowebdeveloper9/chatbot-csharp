import { ButtonProps } from '../types/ButtonProps';

export function Button({ onClink, label }: ButtonProps) {
  return (
    <button
      onClick={onClink}
      className=" flex mb-5 bg-[#1005d8] text-white hover:scale-105  duration-300 font-bold py-4 justify-center items-center px-5 rounded-xl hover:bg-[#000] transition-colors "
    >
      {label}
    </button>
  );
}
