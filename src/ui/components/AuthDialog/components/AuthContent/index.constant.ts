export const AUTH_CONTENT_TEXT: Record<
  string,
  { title: string; paragraph: string; img: string; imgAlt: string }
> = {
  patient: {
    title: 'حساب کاربری بیمار',
    paragraph:
      '          با ورود یا ثبت نام به حساب کاربری خود میتوانید تمامی رزرو های حال و گذشته رو ببینید و حتی رزرو جدیدی ایجاد کنید و همچنین برای رزرو های    انجام شده کامنت بگذارید',
    img: '/svgs/patient.svg',
    imgAlt: 'patient',
  },
  therapist: {
    title: 'حساب کاربری مشاور',
    paragraph:
      '              با ورود یا ثبت نام به عنوان پزشک میتوانید بیماران خود را جذب کنید و داکیومنت های مربوط به رزرو یا بیماران رو مدیریت کنید و همچنین جلسات خود را بررسی کنید',
    img: '/svgs/therapist.svg',
    imgAlt: 'therapist',
  },
};
