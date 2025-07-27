'use client';

import { useState } from 'react';
import { LandingPagesIcons } from '../home/LandingPagesIcons';
import { LightPoints } from '../home/lightPoints';
import { SecureForm } from './SecureForm';
import { Footer } from '../home/Footer';

export function Secure() {
  const [login, setLogin] = useState(false);

  const polarity = () => {
    setLogin((prev) => !prev);
  };

  return (
    <div className="relative flex min-h-screen w-full overflow-hidden flex-col items-center justify-start bg-gradient-to-r from-[#1005d8] via-[#080736] to-[#000000] text-stone-200 px-5">
      <LightPoints />
      <LandingPagesIcons />
      {login ? (
        <SecureForm login={true} onClick={polarity} />
      ) : (
        <SecureForm login={false} onClick={polarity} />
      )}
      <Footer />
    </div>
  );
}
