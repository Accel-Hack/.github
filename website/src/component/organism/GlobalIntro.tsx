'use client';

import TopIntro from './TopIntro';
import Transition from '@/app/(company)/transition';
import { useState, useEffect, ReactNode } from 'react';

type GlobalIntroProps = {
  children?: ReactNode;
  page: string;
};

export default function GlobalIntro({ children, page }: GlobalIntroProps) {
  const [isAccessed, setIsAccessed] = useState<boolean | null>(null);

  useEffect(() => {
    const accessed =
      sessionStorage.getItem('accesskey') !== null ? true : false;

    if (accessed) {
      setIsAccessed(true);
    } else {
      setIsAccessed(false);
      sessionStorage.setItem('accesskey', page);
    }
  }, [page]);

  if (isAccessed === null) {
    return null;
  }

  if (isAccessed === false && page === '/') {
    return (
      <>
        <TopIntro />
        {children}
      </>
    );
  }
  return <Transition>{children}</Transition>;
}
