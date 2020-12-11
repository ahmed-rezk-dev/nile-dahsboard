import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import theme, { GlobalStyle } from './theme';
import { AppProvider } from 'store/context';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
    const GetLayout = (Component as any).Layout ? (Component as any).Layout : Layout;
    return (
        <>
            <GlobalStyle />
            <AppProvider>
                <ThemeProvider theme={theme}>
                    <GetLayout>
                        <Component {...pageProps} />
                    </GetLayout>
                </ThemeProvider>
            </AppProvider>
        </>
    );
}
