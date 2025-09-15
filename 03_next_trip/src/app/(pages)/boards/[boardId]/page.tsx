'use client';

import BoardDetail from '@/components/BoardDetail';
import CommentForm from '@/components/comment/CommentForm';
import CommentList from '@/components/comment/CommentList';
import { useBoardDetailHook } from '@/hooks/useBoardDetailHook';
// import { Suspense } from 'react';

export default function BoardsDetailPage() {
  const { data, error, loading, boardId } = useBoardDetailHook();
  return (
    <main className='flex flex-col'>
      {loading && <p className='flex-grow text-7xl'>로딩중...</p>}
      {error && <p className='text-7xl'>에러가 발생했습니다</p>}
      {data && (
        <>
          <BoardDetail data={data} boardId={boardId} />
          <div className='flex flex-col gap-6'>
            <CommentForm />
            <CommentList boardId={boardId} />
          </div>
        </>
      )}
    </main>
  );
}
