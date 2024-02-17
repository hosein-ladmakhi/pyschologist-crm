'use client';

import Input from '@/ui/kit/Input';
import { useState } from 'react';

const MainPage = () => {
  const [error, setError] = useState<boolean>(false);
  return (
    <div className="container my-20">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default MainPage;
