import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MobileLeadingPageIcons } from '../secure/MobileLeadingPageIcons';
import { LandingPagesIcons } from '../home/LandingPagesIcons';
import { ButtonCreateChat } from './ButtonCreateChat';

export function CreateChatBot() {
  const [isButtonVisile, setButtonVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const polarity = () => {
    setButtonVisible((prev) => !prev);
    setModalVisible((prev) => !prev);
  };

  return (
    <>
     
      <LandingPagesIcons />
      <MobileLeadingPageIcons />
      <div
        onClick={polarity}
        className={
          isButtonVisile
            ? 'flex justify-center m-6  items-center flex-row px-3 py-5 bg-stone-200 rounded-md'
            : 'hidden'
        }
      >
        <p className="flex flex-row text-black text-xl font-bold">
          create one chat <IoMdAdd className="mt-2 ml-2" />
        </p>
      </div>
      <div
        className={
          modalVisible
            ? 'flex flex-col items-center justify-start h-[450px] w-[250px] bg-white rounded-lg mb-5 px-2 py-3'
            : 'hidden'
        }
      >
        <p className="text-black text-md font-bold mt-2 mb-5">create one chat </p>
        <p className='text-black text-xl mb-4 font-bold'>chat name</p>
        <input
         placeholder='chat name'
         className='px-2 py-2 text-md text-black font-semibold border-solid border-2 border-black bg-white rounded-md mb-2'
        />
        <p className='text-black text-xl mb-4 font-bold'>context bot</p>
        <input
         placeholder='can i help you today ?'
         className='px-2 py-2 text-md text-black font-semibold border-solid border-2 border-black bg-white rounded-md mb-2'
        />
        <ButtonCreateChat />
        
      </div>
      <MobileLeadingPageIcons />
    </>
  );
}
