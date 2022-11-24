import '../styles/globals.scss';
import 'rsuite/dist/rsuite.min.css';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';

import store from '../src/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js' />
      <Provider store={store}>
        <Toaster position='top-center' />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
