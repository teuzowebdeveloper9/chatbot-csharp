import { AiOutlineThunderbolt } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';
import { LuBrain } from 'react-icons/lu';

export function LandingPagesIcons() {
  return (
    <>
      {' '}
      <LuBrain size={30} className="text-stone-200 relative top-55 left-105" />
      <AiOutlineThunderbolt
        size={30}
        className="text-stone-200 relative top-65 left-105"
      />
      <FaTools size={30} className="text-stone-200 relative top-75 left-105" />
      <LuBrain
        size={30}
        className="text-stone-200 relative top-35  right-105"
      />
      <AiOutlineThunderbolt
        size={30}
        className="text-stone-200 relative top-45 right-105"
      />
      <FaTools size={30} className="text-stone-200 relative top-55 right-105" />
    </>
  );
}
