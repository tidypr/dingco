import { MdChat, MdShoppingBag, MdPerson, MdVisibility } from 'react-icons/md';

import Link from 'next/link';

const NavItems = [
  {
    href: '/',
    icon: <MdChat />,
    label: '트립토크',
  },
  {
    href: '/',
    icon: <MdShoppingBag />,
    label: '숙박권 구매',
  },
  {
    href: '/mypage',
    icon: <MdPerson />,
    label: '마이페이지',
  },
  {
    href: 'mypage/recent/product',
    icon: <MdVisibility />,
    label: '최근 본 상품',
  },
];

export default function BottomNavBar() {
  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50 w-full bg-white'>
      <div className='mb-5 flex items-center justify-start self-stretch px-5 py-2'>
        {NavItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className='inline-flex flex-1 flex-col items-center justify-start gap-1'
          >
            <div className='relative h-6 w-6 overflow-hidden'>
              <div className='bg-gray-B absolute left-[2.50px] top-[2.50px] h-4 w-5'>
                {item.icon}
              </div>
            </div>
            <div className="text-gray-B justify-start self-stretch text-center font-['Pretendard_Variable'] text-xs font-medium leading-3">
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
