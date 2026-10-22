'use client';
import { usePathname } from 'next/navigation';
import GlobalIntro from '@/component/organism/GlobalIntro';
import { ReactNode } from 'react';

export default function Transition({ children }: { children?: ReactNode }) {
  const path = usePathname() ?? '/';

  return (
    <GlobalIntro key={path} page={path}>
      {children}
    </GlobalIntro>
  );
}
