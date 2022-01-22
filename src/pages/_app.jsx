import GlobalStyle from '@src/styles/Global';

import Header from '@src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
