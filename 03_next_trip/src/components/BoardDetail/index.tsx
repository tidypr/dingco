import { MdOutlineEdit } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';

import { MdLink, MdOutlineLocationOn } from 'react-icons/md';
import { MdOutlineHeartBroken, MdFavoriteBorder } from 'react-icons/md';

// import img1 from '@/assets/images/bf8d80f3268fd56c18f3d708b2130bf315ff5ef8.jpg';
import video1 from '@/assets/images/54a36b7f016934c8179e2369db49c7bb1ef8a9e2.jpg';
import Image from 'next/image';

import { profile_a } from '@/assets/icons/icons';

import { formatDate } from '@/utils/utils';
import Link from 'next/link';
import { IBoardDetail } from '@/types/BoardDetail';
import TooltipComponent from '../common/TooltipComponent';

export default function BoardDetail({ data, boardId }: IBoardDetail) {
  console.log(data?.fetchBoard?.title);
  return (
    <section className='flex h-full w-full flex-col items-center justify-center gap-10 px-5 py-10'>
      <main className='p-16px flex h-full w-full max-w-7xl flex-col gap-6'>
        <header className='h-18 w-fit text-2xl font-bold text-black'>
          {data?.fetchBoard?.title}
        </header>

        {/* ===== 2 ===== */}
        <div className='flex flex-col gap-4'>
          <div className='flex w-full justify-between'>
            <div className='flex gap-1'>
              <Image src={profile_a} alt='profile' />
              <span>{data?.fetchBoard?.writer}</span>
            </div>
            {data?.fetchBoard?.updatedAt &&
              formatDate(data?.fetchBoard?.updatedAt)}
          </div>

          <hr className='my-4 inline-block h-1' />

          <div className='flex justify-end gap-2'>
            <MdLink className='h-6 w-6' />
            {/* <TooltipComponent text={data?.fetchBoard?.address ?? ''}> */}
            <TooltipComponent text='address'>
              <MdOutlineLocationOn className='h-6 w-6' />
            </TooltipComponent>
          </div>
        </div>

        {/* ===== 3 이미지 ===== */}
        {data?.fetchBoard?.images?.[0] || (
          <Image
            className='max-w-100'
            width={360}
            height={360}
            // src={img1}
            src={`http://storage.googleapis.com/codecamp-file-storage/2024/10/25/donggle1.jpeg`}
            alt='dw'
          />
        )}
        {data?.fetchBoard?.images?.[0] && (
          <Image
            className='max-w-100'
            width={360}
            height={360}
            // src={img1}
            src={`http://storage.googleapis.com/${data?.fetchBoard?.images[0]}`}
            alt='dw'
          />
        )}

        {/* ===== 4 텍스트 ===== */}
        <p className='whitespace-pre'>{data?.fetchBoard?.contents}</p>

        {/* ===== 5 비디오 ===== */}
        <div className='flex justify-center'>
          <Image className='w-full max-w-[822px]' src={video1} alt='dw' />
        </div>

        {/* ===== 6 아이콘 ===== */}
        <div className='flex justify-center'>
          <div className='flex gap-6'>
            {/* heart - bad */}
            <div className='flex flex-col items-center justify-center gap-1'>
              <MdOutlineHeartBroken className='h-6 w-6 font-light' />
              {/* <Image className='h-6 w-6' src={Ioutline_bad} alt='outline_bad' /> */}
              <div>24</div>
            </div>
            {/* heart - good */}
            <div className='flex flex-col items-center justify-center gap-1 text-[#f66a6a]'>
              <MdFavoriteBorder className='h-6 w-6' />
              <div>12</div>
            </div>
          </div>
        </div>

        {/* ===== 6 버튼 ===== */}
        <div className='flex justify-center text-xs'>
          <div className='flex gap-6'>
            <button className='flex h-10 w-[105px] items-center gap-2 rounded-lg px-2 py-3 outline outline-1'>
              <MdMenu />
              <span>목록으로</span>
            </button>
            <button className='flex h-10 w-[105px] items-center gap-2 rounded-lg px-2 py-3 outline outline-1'>
              <MdOutlineEdit />
              {/* <button>수정하기</button> */}
              <Link href={`/boards/${boardId}/edit`}>수정하기</Link>
            </button>
          </div>
        </div>
        {/* </div> */}
      </main>
    </section>
  );
}
