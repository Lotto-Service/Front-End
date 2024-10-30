'use client';

import { signOut, useSession } from 'next-auth/react';
import React, { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const { data: session, update, status } = useSession();
  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signOut({ redirect: false });
    }
  }, [session]);
  return children;
}
