'use client';

import { HTMLInputTypeAttribute } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface IInputProps<T extends FieldValues> {
  name: Path<T>;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<T>;
}

export default function Input<T extends FieldValues>(props: IInputProps<T>) {
  const { name, type, register } = props;

  return (
    <>
      <input type={type} {...register(name)} />
    </>
  );
}
