import React from "react";
import Navbar from "./navbar";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { usePreGetAllRound } from "@/hooks/useGetAllRound";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

export default async function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);
  const queryClient = new QueryClient();
  if (session) {
    usePreGetAllRound(queryClient);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <header className="relative">
        <Navbar />
      </header>
      {children}
    </HydrationBoundary>
  );
}
