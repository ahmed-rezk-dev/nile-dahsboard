import React from 'react';
import { Menu, Button } from 'antd';
import { MenuOutlined, UserOutlined, SettingOutlined, BulbOutlined, LogoutOutlined } from '@ant-design/icons';
import { DropdownContainer, DropMenuItem } from '@styled/DropdownMenu';
import Link from 'next/link';

// interface Props {}

const UserMenu = (/* props: Props */) => {
    const userMenu = (
        <Menu>
            <DropMenuItem>
                <Link href="/profile">
                    <a>
                        <UserOutlined />
                        My Profile
                    </a>
                </Link>
            </DropMenuItem>
            <DropMenuItem>
                <Link href="/settings">
                    <a>
                        <SettingOutlined />
                        Settings
                    </a>
                </Link>
            </DropMenuItem>
            <DropMenuItem>
                <Link href="/help">
                    <a>
                        <BulbOutlined />
                        Help
                    </a>
                </Link>
            </DropMenuItem>
            <Menu.Divider />
            <DropMenuItem onClick={() => console.log('Logout Button')}>
                <div>
                    <LogoutOutlined />
                    Logout
                </div>
            </DropMenuItem>
        </Menu>
    );

    return (
        <DropdownContainer overlay={userMenu} placement="bottomLeft">
            <Button icon={<MenuOutlined />} />
        </DropdownContainer>
    );
};

export default UserMenu;
