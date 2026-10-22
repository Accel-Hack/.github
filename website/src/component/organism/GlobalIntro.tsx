'use client';

import TopIntro from './TopIntro';
import Transition from '@/app/(company)/transition';
import { useState, useEffect, ReactNode } from 'react';

type GlobalIntroProps = {
  children?: ReactNode;
  page: string;
};

export default function GlobalIntro({ children, page }: GlobalIntroProps) {
  const [isAccessed, setIsAccessed] = useState<string | null>(null);

  useEffect(() => {
    const accessPage = sessionStorage.getItem('accesskey');

    if (accessPage) {
      setIsAccessed(accessPage);
    } else {
      sessionStorage.setItem('accesskey', page);
    }
  }, []);

  if (isAccessed === null && page === '/') {
    return (
      <>
        <TopIntro />
        {children}
      </>
    );
  } else {
    return <Transition>{children}</Transition>;
  }
}
