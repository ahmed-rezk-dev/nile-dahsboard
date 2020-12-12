import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Layout as AntLayout } from 'antd';
const { Content } = AntLayout;

type Props = {
    children?: ReactNode;
    title?: string;
};

const LoginLayout: React.FC<Props> = ({ children, title = 'Pyramids Dashboard | Login' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
                href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
                rel="stylesheet"
            />
            <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png" />
            <link rel="manifest" href="favicon/site.webmanifest" />
        </Head>
        {children}
    </div>
);

export default LoginLayout;
