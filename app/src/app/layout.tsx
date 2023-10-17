import type { Metadata } from 'next';
import { LazyMotion, domAnimation } from 'framer-motion';
import ThemeRegistry from '@/theme/ThemeRegistry';
import AppContent from './AppContent';

// Handle SEO & <head> here
export const metadata: Metadata = {
  title: 'Ben Beck - Portfolio',
  description: 'BenBeck.dev',
  icons: {
    icon: [
      '/favicon/favicon.ico',
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  themeColor: '#1F1F1F',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {/* <LazyMotion features={domAnimation} strict>
            <AppContent>{children}</AppContent>
          </LazyMotion> */}
          <AppContent>{children}</AppContent>
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
