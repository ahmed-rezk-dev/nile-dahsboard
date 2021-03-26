import React from 'react';
import { Menu, Badge, Button, List } from 'antd';
import {
    BellOutlined,
    DislikeOutlined,
    UserOutlined,
    LikeOutlined,
    DollarOutlined,
    MessageOutlined,
} from '@ant-design/icons';
import { DropdownContainer } from '../Styled/DropdownMenu';
import Link from 'next/link';
import styled from 'styled-components';

// interface Props {}

const data = [
    {
        id: 1,
        title: 'unsubscribed',
        type: <DislikeOutlined />,
        description: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    },
    {
        id: 3,
        title: 'user',
        type: <UserOutlined />,
        description: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    },
    {
        id: 4,
        title: 'subscription',
        type: <LikeOutlined />,
        description: 'Duis at velit eu est congue elementum.',
    },
    {
        id: 5,
        title: 'purchased',
        type: <DollarOutlined />,
        description: 'In sagittis dui vel nisl.',
    },
    {
        id: 6,
        title: 'Message',
        type: <MessageOutlined />,
        description: 'In tempor, turpis nec euismod scelerisque',
    },
];

const MenuContainer = styled(Menu)`
    min-width: 400px;
    padding: 0;
    .ant-list-item-meta-title {
        &::first-letter {
            text-transform: uppercase;
        }
    }
    .ant-list-footer {
        padding: 0 !important;
    }
`;

const NotifIconContainer = styled.div`
    background: ${(props) => props.theme.colors.primaryColor};
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        font-size: 1.5rem;
        color: #fff;
    }
`;

const NotifItemLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
    &:hover {
        background-color: ${(props) => props.theme.colors.layoutBodyBackground};
    }
`;

const NotifFooter = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    padding: 16px 24px;
    text-align: center;
    background-color: #fff;
    &:hover {
        background-color: ${(props) => props.theme.colors.layoutBodyBackground};
    }
`;

const NotifHeader = styled.div`
    text-align: center;
`;

const NotificationsMenu = (/* props: Props */) => {
    const menu = (
        <MenuContainer>
            <List
                size="large"
                header={<NotifHeader>Notifications</NotifHeader>}
                footer={
                    <Link href="/notifications">
                        <NotifFooter>See All</NotifFooter>
                    </Link>
                }
                bordered
                dataSource={data}
                itemLayout="horizontal"
                renderItem={(item) => (
                    <Link href="/notifications">
                        <NotifItemLink>
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<NotifIconContainer>{item.type}</NotifIconContainer>}
                                    title={item.title}
                                    description={item.description}
                                />
                            </List.Item>
                        </NotifItemLink>
                    </Link>
                )}
            />
        </MenuContainer>
    );

    return (
        <DropdownContainer overlay={menu} trigger={['click']} placement="bottomRight">
            <Badge count={1}>
                <Button icon={<BellOutlined />} />
            </Badge>
        </DropdownContainer>
    );
};

export default NotificationsMenu;
