'use client';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BoardSchema, TBoardForm } from './schema';

export default function BoardsWrite() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TBoardForm>({
    resolver: zodResolver(BoardSchema),
    mode: 'onChange',
  });
  const router = useRouter();

  console.log(isValid);
  // TEMP
  const isEdit = false;

  const test = { ...register('title') };
  console.log(test);

  const onSubmit = (rawData: TBoardForm) => {
    console.log(errors);
    console.log(rawData);
  };

  return (
    <FormProvider register={register} errors={errors} handleSubmit={handleSubmit} isValid={isValid}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='작성자 명을 입력해주세요.'
            {...register('writer', { required: true })}
          />
          {errors.writer && (
            <span className='text-[#f66a6a]'>{errors.writer.message}</span>
          )}
          <input
            type='text'
            placeholder='비밀번호를 입력해 주세요.'
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className='text-[#f66a6a]'>{errors.password.message}</span>
          )}
          <input
            type='text'
            placeholder='제목을 입력해 주세요.'
            {...register('title', { required: true })}
          />
          {errors.title && (
            <span className='text-[#f66a6a]'>{errors.title.message}</span>
          )}
          <textarea
            placeholder='내용을 입력해 주세요.'
            {...register('contents', { required: true })}
          />
          {errors.contents && (
            <span className='text-[#f66a6a]'>{errors.contents.message}</span>
          )}
        </div>

        {/* Buttons */}
        <div className='mb-20 flex w-full justify-end py-6'>
          <div className={'flex h-10 w-full gap-2'}>
            <button
              type='button'
              className='border-1 flex w-full items-center justify-center rounded-xl border border-gray-300 px-4 py-3'
              onClick={() => router.back()}
            >
              취소
            </button>
            <button
              className={`border-1 flex w-full items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-white ${
                isValid ? 'bg-[#2974E5]' : 'bg-gray-300'
              }`}
            >
              {!isEdit ? '등록하기' : '수정하기'}
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
