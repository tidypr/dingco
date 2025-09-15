'use client';
import {
  CreateBoardCommentDocument,
  // CreateBoardCommentMutation,
  // CreateBoardCommentMutationVariables,
} from '@/types/gql/graphql';
import { useMutation } from '@apollo/client';
import { useParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { MdChatBubbleOutline } from 'react-icons/md';
import InputBox from '../common/InputBox';

import { Rate } from 'antd';

export default function CommentForm() {
  const [comments, setComments] = useState('');
  const [writer, setWriter] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { boardId } = useParams();
  const [rating, setRating] = useState(3);

  // const [createBoardComment] = useMutation<
  //   CreateBoardCommentMutation,
  //   CreateBoardCommentMutationVariables
  // >(CreateBoardCommentDocument);

  const [createBoardComment] = useMutation(CreateBoardCommentDocument);

  const onHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            rating: rating,
            contents: comments,
          },
          boardId: String(boardId),
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeContents = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value);
  };

  return (
    <div className='flex-col items-start gap-10 px-5'>
      <div className='flex flex-col items-start gap-2'>
        <div className='flex items-center gap-2'>
          <MdChatBubbleOutline />
          <div className='text-base font-semibold leading-normal text-black'>
            댓글
          </div>
        </div>
        <form
          className='flex w-full flex-col items-end justify-center gap-4'
          onSubmit={onHandleSubmit}
        >
          {/* <div className='flex items-center gap-2'>
            {Array.from({ length: 5 }).map((_, index) => (
              <MdOutlineStar key={index} className='h-6 w-6 text-[#c7c7c7]' />
            ))}
          </div> */}
          <div className='flex w-full items-center gap-2'>
            <Rate onChange={setRating} value={rating} />
          </div>
          <div className='flex w-full gap-4'>
            <InputBox
              label='작성자'
              name='writer'
              type='text'
              placeholder='작성자'
              onChange={onChangeWriter}
              required
            />
            <InputBox
              label='비밀번호'
              name='password'
              type='password'
              placeholder='비밀번호'
              onChange={onChangePassword}
              required
            />
          </div>
          <div className='relative w-full'>
            <textarea
              onChange={onChangeContents}
              rows={4}
              className='flex h-36 w-full flex-col items-start rounded-lg px-4 py-3 text-base font-normal leading-normal text-gray-400 outline outline-1 outline-offset-[-1px] outline-gray-300'
              placeholder='댓글을 입력해 주세요.'
            />
            <div className='absolute bottom-4 right-4 text-base font-medium leading-normal text-gray-400'>
              0/100
            </div>
          </div>
          <button className='h-12 w-[99px] items-center gap-2 rounded-lg bg-black px-3 py-2 text-center text-lg font-semibold leading-normal text-white'>
            댓글 등록
          </button>
        </form>
      </div>
    </div>
  );
}
