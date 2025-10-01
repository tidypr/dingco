'use client';

import { useFormContext } from 'react-hook-form';
export default function FormProviderInput() {
  const { register } = useFormContext();

  return (
    <>
      <input {...register('title')} />
    </>
  );
}
