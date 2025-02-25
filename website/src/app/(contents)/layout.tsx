import React from 'react';
import TabMenu from '@/component/layout/TabMenu';

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <TabMenu />
    </div>
  );
}
