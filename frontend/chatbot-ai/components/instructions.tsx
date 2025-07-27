import { PiHandPointingBold } from 'react-icons/pi';
import { AiOutlineThunderbolt } from 'react-icons/ai';

export function Instructions() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-5 text-stone-200 font-bold text-sm m-4">
      <PiHandPointingBold size={80} className="text-stone-200 " />
      <p className="flex flex-row">
        1- create your acount clicking on "make your account"
      </p>
      <p className="flex flex-row">
        2- make your session chat bot passing your name and context
      </p>
      <p className="flex flex-row">
        3- and start using the chatbot to help you in all your activities
      </p>
      <AiOutlineThunderbolt size={80} className="text-stone-200 " />
    </div>
  );
}
