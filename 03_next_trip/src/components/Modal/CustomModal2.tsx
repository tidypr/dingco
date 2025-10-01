import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
// import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { LOGO } from '@/assets/icons/icons';
// import Link from 'next/link';

export function CustomModal2({
  children,
  isSuccessSignup,
  onToggleOpen,
  onClickSwitch,
}: {
  className?: string;
  children?: React.ReactNode;
  isSuccessSignup: boolean;
  onToggleOpen?: () => void;
  onClickSwitch?: () => void;
}) {
  return (
    <AlertDialog open={isSuccessSignup} onOpenChange={onToggleOpen}>
      {/* <AlertDialogTrigger asChild>
        <Button variant='outline' className={className} type='button'>
          {btnText}
        </Button>
      </AlertDialogTrigger> */}
      <AlertDialogContent className='w-5/6 rounded-lg'>
        {children}
        <AlertDialogHeader>
          {/* <AlertDialogTitle>'Are you absolutely sure?'</AlertDialogTitle> */}
          <AlertDialogTitle>회원가입을 축하 드려요.</AlertDialogTitle>
          <AlertDialogDescription>
            <div className='flex w-full items-center justify-center'>
              <Image className='h-[80px] w-[120px]' src={LOGO} alt='Logo' />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
          <AlertDialogCancel asChild>
            {/* <Link
              href='/auth/login'
              className='flex w-full items-center justify-center'
            > */}
            <button
              type='button'
              className='mx-auto rounded-md bg-blue-500 py-2 text-white'
              onClick={onClickSwitch}
            >
              로그인 하기
            </button>
            {/* </Link> */}
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
