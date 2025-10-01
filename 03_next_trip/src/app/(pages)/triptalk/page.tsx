import HotBoardList from '@/components/HotBoard/HotBoardList';
import BoardList from '@/components/boards-list';
import Link from 'next/link';
import { MdEditDocument } from 'react-icons/md';

export default function TripTalkPage() {
  return (
    <div className='relative flex w-full flex-col'>
      <HotBoardList />
      <BoardList />

      <Link href='/boards/new'>
        <div className='fixed bottom-24 right-5 inline-flex h-10 items-center justify-start gap-2 rounded-lg bg-blue-600 px-3 py-2'>
          <div className='relative h-6 w-6 overflow-hidden'>
            <div className='absolute left-[3.50px] top-[1.56px] h-5 w-5 text-white'>
              <MdEditDocument />
            </div>
          </div>
          <span className='justify-start text-center text-sm font-semibold leading-tight text-white'>
            트립토크 등록
          </span>
        </div>
      </Link>
    </div>
  );
}
