import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from 'lib/styles/globalStyle';
import { wrapper } from 'lib/store';
import persistReducer from 'lib/store/modules';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});
const persistor = persistStore(store);

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>loading...</div>}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Head>
              <title>Todo-App</title>
            </Head>
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default wrapper.withRedux(App)