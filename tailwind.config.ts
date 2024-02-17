import { colorThemes } from './src/constants/color-theme.constant';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: colorThemes,
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
