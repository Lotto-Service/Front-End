import { useRouter } from 'next/navigation';

export default function useCommonRouter() {
  const router = useRouter();

  const toMain = () => {
    router.push('/Main');
  };
  const toNumbers = () => {
    router.push('/Numbers');
  };
  const toLogin = () => {
    router.push('/');
  };
  const toSignUp = () => {
    router.push('/SignUp');
  };

  return {
    toMain,
    toNumbers,
    toLogin,
    toSignUp,
  };
}
