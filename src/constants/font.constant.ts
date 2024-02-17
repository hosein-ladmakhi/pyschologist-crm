import localFont from 'next/font/local';

export const iranYekanFont = localFont({
  src: [
    {
      path: '../../public/fonts/iranyekan/iranyekan-bold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iranyekan/iranyekan-regular.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iranyekan/iranyekan-light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iranyekan/iranyekan-thin.woff',
      weight: '200',
      style: 'normal',
    },
  ],
});
