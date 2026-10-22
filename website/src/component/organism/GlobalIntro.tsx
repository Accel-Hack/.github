'use client';

import TopIntro from './TopIntro';
import Transition from '@/app/(company)/transition';
import { useState, useEffect, ReactNode } from 'react';

type GlobalIntroProps = {
  children?: ReactNode;
  page: string;
};

export default function GlobalIntro({ children, page }: GlobalIntroProps) {
  const [isAccessed, setIsAccessed] = useState<boolean>(false);

  useEffect(() => {
    const accessed =
      sessionStorage.getItem('accesskey') !== null ? true : false;

    if (accessed) {
      setIsAccessed(accessed);
    } else {
      sessionStorage.setItem('accesskey', page);
    }
  }, []);

  if (isAccessed === false && page === '/') {
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
