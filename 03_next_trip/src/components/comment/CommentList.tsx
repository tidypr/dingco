'use client';

import { FETCH_BOARD_COMMENTS } from '@/apis/graphql/boardComment.gql';
import { profile_a } from '@/assets/icons/icons';
import { BoardComment } from '@/types/gql/graphql';
import { useQuery } from '@apollo/client';
import { Rate } from 'antd';

import Image from 'next/image';

export default function CommentList({
  boardId,
}: {
  boardId: string | string[];
}) {
  console.log(boardId);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(boardId),
    },
  });

  // console.log(data);
  console.log(data && data.fetchBoardComments);
  return (
    <div className='mb-10 justify-start divide-slate-300 px-5 text-center text-sm font-normal leading-tight text-gray-600'>
      {!data?.fetchBoardComments.length && (
        <div className='mb-10 justify-start text-center text-sm font-normal leading-tight text-gray-600'>
          등록된 댓글이 없습니다.
        </div>
      )}
      {data?.fetchBoardComments &&
        data?.fetchBoardComments.map((el: BoardComment) => (
          <div key={el._id} className='mb-10'>
            <div className='mb-2 flex flex-col items-start gap-2'>
              <span className='flex gap-1 text-sm font-bold leading-tight text-gray-800'>
                <div className='flex gap-2'>
                  <Image src={profile_a} alt='profile' />
                  <p className='whitespace-pre text-left'>{el.writer}</p>
                </div>
                <Rate disabled defaultValue={el.rating} />
                {/* <div>
                  <span>작성</span>
                  <span>X</span>
                </div> */}
              </span>
              <p>{el.contents}</p>
              <span className='text-xs font-normal leading-tight text-gray-500'>
                {new Date(el.createdAt).toLocaleDateString('ko-KR')}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
