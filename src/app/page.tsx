'use client';

import Link from 'next/link';

const MainPage = () => {
  return (
    <div className="container my-20">
      <Link href="/auth/therapist/login">صفحه ورود</Link>
      <Link href="/auth/therapist/signup">صفحه ثبت نام</Link>
    </div>
  );
};

export default MainPage;
