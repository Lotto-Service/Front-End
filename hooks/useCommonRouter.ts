import { useRouter } from "next/navigation";

export default function useCommonRouter() {
  const router = useRouter();

  const toMain = () => {
    router.push("/main");
  };
  const toNumbers = () => {
    router.push("/numbers");
  };
  const toLogin = () => {
    router.push("/signIn");
  };
  const toSignUp = () => {
    router.push("/signUp");
  };

  return {
    toMain,
    toNumbers,
    toLogin,
    toSignUp,
  };
}
