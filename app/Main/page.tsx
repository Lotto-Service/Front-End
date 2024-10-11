import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Main from "./(component)/Main";
import { useSession } from "next-auth/react";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import RoundApi from "../api/Round/RoundApi";

export default async function MainPage() {
  const queryClient = new QueryClient();
  // const session = cookies().get("next-auth.session-token")?.value || "";
  // const session = (await getServerSession(nextAuthOptions))?.accessToken || "";

  // const { getAllRoundInfo } = RoundApi;
  // const res = await queryClient.prefetchQuery({
  //   queryKey: ["Round", session],
  //   queryFn: () => getAllRoundInfo({ token: session }),
  // });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main />
    </HydrationBoundary>
  );
}
