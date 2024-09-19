"use client";

import { store } from '@/store/store';
import React from 'react'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

persistStore(store);
export default function ReduxClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}