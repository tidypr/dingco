'use client';
import { FETCH_BOARDS } from '@/apis/graphql/board';
import { useQuery } from '@apollo/client';
import Board from './Board';
import { type TBoard } from '@/types';

export default function BoardList() {
  const { data, loading, error } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  console.log(data);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col gap-2 px-4'>
      <div className='flex h-7 w-full justify-around gap-2 p-2'>
        <span className='flex-1'>번호</span>
        <span className='flex-1'>상품명</span>
        <span className='flex-1'>작성자</span>
        <span className='flex-1'>날짜</span>
      </div>
      <ul className='flex flex-col gap-4'>
        {data?.fetchBoards.map((board: TBoard) => (
          <Board key={board._id} {...board} />
        ))}
      </ul>
    </div>
  );
}
