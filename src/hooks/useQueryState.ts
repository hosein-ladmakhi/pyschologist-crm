'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export const useQueryState = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSet = (key: string, value: any) => {
    const url = new URLSearchParams(searchParams);
    url.set(key, `${value}`);
    router.push(pathname + '?' + url);
  };

  const handleGet = (key: string) => {
    return searchParams.get(key);
  };

  const handleDelete = (key: string) => {
    const url = new URLSearchParams(searchParams);
    url.delete(key);
    router.push(pathname + '?' + url);
  };

  return { get: handleGet, set: handleSet, delete: handleDelete };
};
