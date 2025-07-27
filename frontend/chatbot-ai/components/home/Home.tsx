import { FaBrain } from 'react-icons/fa';
import { OpinionsCarrousel } from './OpinionsCarrousel';
import { Button } from './Button';
import { HomeProps } from '../../types/HomeProps';
import { Instructions } from './instructions';
import { GiBrain } from 'react-icons/gi';
import { Footer } from './Footer';

import { LightPoints } from './lightPoints';
import { LandingPagesIcons } from './LandingPagesIcons';

export function HomeComponent({ onClink }: HomeProps) {
  return (
    <div className="relative flex min-h-screen w-full overflow-x-hidden flex-col items-center justify-start bg-gradient-to-r from-[#1005d8] via-[#080736] to-[#000000] text-stone-200 px-5">
      <LightPoints />
      <LandingPagesIcons />

      <h1 className="flex flex-row gap-4 text-3xl font-bold mt-6 mb-4 z-10 text-stone-200">
        chat bot AI <FaBrain />
      </h1>

      <div className="flex break-words w-full max-w-md h-[400px] p-4 justify-start items-center border-2 border-[#03015c] rounded-lg m-4 z-10">
        <p className="font-bold text-2xl font-stretch-125% text-stone-200 ">
          <GiBrain /> Make your chat bot your way so it can help you in a
          personalized way 🤖. Give the chat a name and the context 🧠 of what
          it will do, and start enjoying the help 🙌 it can provide you.
        </p>
      </div>
      <OpinionsCarrousel />
      <Button label="make your account" onClink={onClink} />
      <Instructions />
      <Footer />
    </div>
  );
}
