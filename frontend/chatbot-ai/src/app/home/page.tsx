'use client'

import { useContext, useEffect } from 'react';
import { MainComponent } from '../../../components/main/MainComponent';
import { AuthContext } from '../../../context/AuthContext';

export default function HomePage() {
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (auth?.loadUser) {
      auth.loadUser();
    }
  }, []);

  return <MainComponent />;
}
