import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Layout as AntLayout } from 'antd';
import Sidebar from '@/components/Sidebar';
const { Content } = AntLayout;

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <AntLayout style={{ minHeight: '100vh' }}>
            {/* <header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>{' '}
                    |{' '}
                    <Link href="/about">
                        <a>About</a>
                    </Link>{' '}
                    |{' '}
                    <Link href="/users">
                        <a>Users List</a>
                    </Link>{' '}
                    | <a href="/api/users">Users API</a>
                </nav>
            </header> */}
            <Sidebar collapsed={false} />
            <AntLayout>
                <Content style={{ marginTop: 30 }}>
                    <div style={{ padding: 24, minHeight: 360 }}> {children}</div>
                </Content>
                <footer>
                    <hr />
                    <span>I'm here to stay (Footer)</span>
                </footer>
            </AntLayout>
        </AntLayout>
    </div>
);

export default Layout;
