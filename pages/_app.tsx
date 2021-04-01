import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import theme, { GlobalStyle } from '../theme';
import { AppContext, AppProvider } from 'store/context';
import Layout from 'components/Layout';
import { useApollo } from 'graphql/apollo';
import { ApolloProvider } from '@apollo/client';
import { useContext } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    const GetLayout = (Component as any).Layout ? (Component as any).Layout : Layout;

    const { state } = useContext(AppContext);
    const auth = state.auth;

    const apolloClient = useApollo({ ...pageProps.initialApolloState, auth });

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
