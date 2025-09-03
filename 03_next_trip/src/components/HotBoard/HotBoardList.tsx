import HotBoard from './HotBoard';

export default function HotBoardList() {
  return (
    <div className='h-42 w-full bg-red-100 px-5'>
      <div className='flex flex-col gap-4'>
        <p>오늘 핫한 트립토크</p>
        <HotBoard />
      </div>
    </div>
  );
}
