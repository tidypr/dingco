'use client';

import { FieldValues, FormState } from "react-hook-form";

interface IButtonProps {
  children: React.ReactNode;
  formState: FormState<FieldValues>;
}

export default function Button({ children, formState }: IButtonProps) {
  return <button disabled={!formState.isValid}>{children}</button>;
}
