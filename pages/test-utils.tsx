import {ThemeProvider} from 'styled-components';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'mutationobserver-shim';

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

const AntRenderer = ({children}: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: any, options?: any) =>
    render(ui, {
        wrapper: AntRenderer,
        ...options,
    });

export * from '@testing-library/react';
export {customRender as render};
