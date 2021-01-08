import {AppProps} from 'next/app';
import { Provider} from 'overmind-react';

import '../styles/globals.css'
import {overmind} from '../overmind';

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider value={overmind}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
