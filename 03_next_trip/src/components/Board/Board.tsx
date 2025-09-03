import { type TBoard } from '@/types';
import { formatDate } from '@/utils/utils';
import Link from 'next/link';

export default function Board({
  _id,
  writer,
  title,
  updatedAt,
}: Partial<TBoard>) {
  return (
    //
    // <li className='flex h-9 w-72 gap-2 border-b p-2'>
    <Link href={`/boards/${_id}`}>
      <li className='flex h-9 w-full justify-between gap-2 rounded-lg border p-2'>
        <span># 번호</span>
        <span>{title}</span>
        <span>{writer}</span>
        <span>{updatedAt ? formatDate(updatedAt) : '-'}</span>
      </li>
    </Link>
  );
}
