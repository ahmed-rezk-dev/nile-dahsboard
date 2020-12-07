import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import theme, { GlobalStyle } from './theme';
import { AppProvider } from 'store/context';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <AppProvider>
                <ThemeProvider theme={theme}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </AppProvider>
        </>
    );
}
