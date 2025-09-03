import { img03 } from '@/assets/images/images';
import Image from 'next/image';

export default function Carousel() {
  return (
    <div className='h-50 w-90'>
      <Image src={img03} alt='banner03' />
    </div>
  );
}
