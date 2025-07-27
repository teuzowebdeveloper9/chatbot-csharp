import { AiOutlineThunderbolt } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';
import { LuBrain } from 'react-icons/lu';

export function MobileLeadingPageIcons() {
  return (
    <div className="flex md:hidden flex-row justify-center items-center gap-2 mb-5">
      <AiOutlineThunderbolt
        size={30}
        className="text-stone-200 my-1 mx-2  relative "
      />
      <FaTools size={30} className="text-stone-200 my-1 mx-2  relative " />
      <LuBrain size={30} className="text-stone-200  my-1 mx-2 relative" />
    </div>
  );
}
