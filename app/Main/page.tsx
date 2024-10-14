import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Main from "./(component)/Main";

export default async function MainPage() {
  const queryClient = new QueryClient();
  return <Main />;
}
