import SignIn from "./SignIn";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="min-h-[900px] bg-background">
        <SignIn />
      </main>
    </HydrationBoundary>
  );
}
