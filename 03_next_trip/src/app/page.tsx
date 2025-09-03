import HotBoardList from '@/components/HotBoard/HotBoardList';
import Carousel from '@/components/Carousel';
import Link from 'next/link';
import BoardList from '@/components/Board/BoardList';

export default function HomePage() {
  return (
    <div className='flex flex-col'>
      <Carousel />
      <HotBoardList />
      <Link href='/boards/new'>New Board</Link>
      <Link href='/boards/detail'>Board Detail</Link>
      <BoardList />
    </div>
  );
}
