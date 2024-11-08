import { Rubik, Raleway } from 'next/font/google';
export const primary = Rubik({
  subsets: ['latin'],
  variable: '--font-primary',
});

export const secondary = Raleway({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['300', '400', '500', '600', '700'],
});
