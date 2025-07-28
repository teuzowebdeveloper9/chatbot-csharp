import { useContext, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MobileLeadingPageIcons } from '../secure/MobileLeadingPageIcons';
import { LandingPagesIcons } from '../home/LandingPagesIcons';
import { ButtonCreateChat } from './ButtonCreateChat';
import { LightPoints } from '../home/lightPoints';
import { AuthContext } from '../../context/AuthContext';
import { handleCreateChat } from '../../utils/HandleCreateChat';

export function CreateChatBot() {
  const [isButtonVisile, setButtonVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    name: '',
    context: '',
  });

  const polarity = () => {
    setButtonVisible((prev) => !prev);
    setModalVisible((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const { user } = useContext(AuthContext);

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
        <p className="text-black text-md font-bold mt-2 mb-5">
          create one chat{' '}
        </p>
        <p className="text-black text-xl mb-4 font-bold">chat name</p>
        <input
          onChange={handleChange}
          name="name"
          value={form.name}
          placeholder="chat name"
          className="px-2 py-2 text-md text-black font-semibold border-solid border-2 border-black bg-white rounded-md mb-2"
        />
        <p className="text-black text-xl mb-4 font-bold">context bot</p>
        <input
          onChange={handleChange}
          name="context"
          value={form.context}
          placeholder="can i help you today ?"
          className="px-2 py-2 text-md text-black font-semibold border-solid border-2 border-black bg-white rounded-md mb-2"
        />
        <ButtonCreateChat
          onClick={async () => {
            try {
              await handleCreateChat({
                userId: user.id,
                name: form.name,
                context: form.context,
              });
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </div>
      <MobileLeadingPageIcons />
    </>
  );
}
