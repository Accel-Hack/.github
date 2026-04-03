import './globals.css';

export const metadata = {
  title: 'ADeT – 仕様書管理を、仕組みで変える',
  description: 'ADeT は仕様書管理を仕組みで変えるサービスです。',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
