import { useState } from 'react';

type InputBoxProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isInput?: string;
  isSubmitCheck?: () => void;
  defaultValue?: string;
  isEdit?: boolean;
};

export default function InputBox({
  label,
  name,
  type,
  placeholder,
  required,
  onInput,
  onChange,
  isInput,
  isSubmitCheck,
  defaultValue,
  isEdit,
}: InputBoxProps) {
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
    if (isSubmitCheck) {
      isSubmitCheck();
    }
  };

  // focus out & input null
  const warning = touched && !isInput;

  return (
    <>
      {!isEdit && (
        <div className='flex w-full flex-col items-start justify-start gap-2'>
          <div className='flex gap-1 text-sm'>
            <label className='font-base font-semibold' htmlFor={label}>
              {label}
            </label>
            {required ? <span className='text-[#f66a6a]'>*</span> : ''}
          </div>
          <input
            id={label}
            name={name}
            type={type}
            className='w-full flex-1 gap-2 rounded-lg px-4 py-3 outline outline-1 outline-gray-200'
            placeholder={placeholder}
            required={required}
            onInput={onInput}
            onChange={onChange}
            onBlur={handleBlur}
            defaultValue={defaultValue}
          />
          <div className='h-10'>
            <span className='text-[#f66a6a]'>
              {warning ? '필수입력 사항 입니다.' : ''}
            </span>
          </div>
          {/* {isInput ? <div></div> : <RequiredInput />} */}
          {/* <input placeholder={`${placeholder} 입력해 주세요.`}></input> */}
        </div>
      )}
    </>
  );
}
