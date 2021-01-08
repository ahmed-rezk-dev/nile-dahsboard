import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import theme from '../theme';
import './matchMedia.mock';
// import Layout from 'components/Layout';
// import { MockedProvider, MockedResponse } from '@apollo/client/testing';

// type RenderApolloOptions = {
//     mocks?: MockedResponse[];
//     addTypename?: any;
//     defaultOptions?: any;
//     cache?: any;
//     resolvers?: any;
//     [st: string]: any;
// };

// const theme = {
//     colors: {
//         primary: '#0070f3',
//     },
// };

const AllRenderers = ({ children }: any) =>
    // { mocks, addTypename, defaultOptions, cache, resolvers }: RenderApolloOptions = {}
    {
        // return (
        //     <>
        //         <GlobalStyle />
        //         <ThemeProvider theme={theme}>
        //             {/* <MockedProvider
        //             mocks={mocks}
        //             addTypename={addTypename}
        //             defaultOptions={defaultOptions}
        //             cache={cache}
        //             resolvers={resolvers}
        //         > */}
        //             {children}
        //             {/* </MockedProvider> */}
        //         </ThemeProvider>
        //     </>
        // );
        return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    };

const customRender = (ui: any, options?: any) =>
    render(ui, {
        wrapper: AllRenderers,
        ...options,
    });

export * from '@testing-library/react';
export { customRender as render };
