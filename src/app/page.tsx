'use client';

import Button from '@/ui/kit/Button';
import ImagePicker from '@/ui/kit/ImagePicker';
import { useState } from 'react';

const MainPage = () => {
  const [error, setError] = useState<boolean>(false);
  return (
    <div className="container my-20">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3"></div>
      </div>

      <Button onClick={() => setError(true)} variant="accent">
        کلیک کردن
      </Button>
    </div>
  );
};

export default MainPage;
