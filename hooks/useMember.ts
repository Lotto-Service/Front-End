import { SignUpType } from "@/utils/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { signIn } from "next-auth/react";

const signUp = async (props: SignUpType) => {
  return await axios.post(`${process.env.NEXTAUTH_URL}/users`, props);
};

export const useMember = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: signInMutate } = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) =>
      signIn("credentials", {
        username,
        password,
        redirect: false,
        callbackUrl: "/Main",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["signIn"],
      });
    },
  });

  return {
    signInMutate,
  };
};
