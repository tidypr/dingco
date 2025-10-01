'use client';

import { useFormContext } from 'react-hook-form';

export default function FormProviderButton() {
  const { handleSubmit, formState } = useFormContext();

  return (
    <button
      type='submit'
      disabled={!formState.isValid}
      onClick={handleSubmit((data) => console.log(data))}
    >
      등록하기
    </button>
  );
}
