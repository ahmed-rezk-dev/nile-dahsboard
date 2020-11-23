import {AppProps} from 'next/dist/next-server/lib/router/router';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
