import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import theme, { GlobalStyle } from './theme';
import { AppProvider } from 'store/context';
import Layout from '@/components/Layout';
import { useApollo } from 'lib/apollo';
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
    const GetLayout = (Component as any).Layout ? (Component as any).Layout : Layout;

    const apolloClient = useApollo(pageProps.initialApolloState);
    return (
        <>
            <GlobalStyle />
            <AppProvider>
                <ThemeProvider theme={theme}>
                    <GetLayout>
                        <ApolloProvider client={apolloClient}>
                            <Component {...pageProps} />
                        </ApolloProvider>
                    </GetLayout>
                </ThemeProvider>
            </AppProvider>
        </>
    );
}
