import GlobalStyle from '@src/styles/Global';

import Header from '@src/components/Header';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>로스트아크 어시스턴트</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
