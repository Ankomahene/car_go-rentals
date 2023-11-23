import './globals.css';
import type { Metadata } from 'next';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Navbar } from '@/components/Navbar';
import { UserSessionContextProvider } from '@/context/UserSessionContext';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Car Go Rentals',
  description: 'Rent Cars anywhere. Hop in, Ride On',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>
          <UserSessionContextProvider>
            <Navbar />
            {children}
            <ToastContainer />
          </UserSessionContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
