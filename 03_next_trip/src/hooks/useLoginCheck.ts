'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useLoginCheck = () => {
  const router = useRouter();

  const LoginCheckFn = () => {
    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        router.push('/auth/login');
      }
    }, []);
  };

  return {
    loginCheck: LoginCheckFn,
  };
};
