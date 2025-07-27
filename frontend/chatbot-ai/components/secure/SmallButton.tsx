import { ButtonProps } from "../../types/ButtonProps";

export function SmallButton({label,onClink} : ButtonProps){
  return(
    <button
      onClick={onClink}
      className=" flex mb-5 bg-[#1005d8]  text-white hover:scale-105  duration-300 font-bold py-2 justify-center items-center px-2 ml-4 rounded-xl hover:bg-[#000] transition-colors "
    >
      {label}
    </button>
  );
}
