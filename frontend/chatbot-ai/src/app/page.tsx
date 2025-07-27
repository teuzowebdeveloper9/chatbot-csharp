'use client';

import { useRouter } from 'next/navigation';
import { HomeComponent } from '../../components/Home';

export default function Home() {
  const router = useRouter();

  return <HomeComponent onClink={() => router.push('/login')} />;
}
