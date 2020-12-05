/**
 *
 * Sidebar
 *
 */

import React from 'react';
import { Spring } from 'react-spring/renderprops.cjs';
import { HiHome, HiUsers } from 'react-icons/hi';
import { AiFillProfile, AiFillBell, AiFillSetting, AiFillQuestionCircle, AiFillWarning } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
// Images
import {
    SiderContainer,
    Logo,
    AvatarImg,
    UsernameTitle,
    UserTypeTitle,
    MenuContainer,
    SiderMenu,
    MenuItem,
    SubMenuContainer,
    SubMenuTitle,
    SubMenuItem,
} from '@/components/Styled/Sidebar';
import { CollapseType } from 'antd/lib/layout/Sider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BaseRouter } from 'next/dist/next-server/lib/router/router';

type Props = {
    // toggle: CollapseType;
    collapsed: boolean;
};

const Sidebar = ({ collapsed }: Props) => {
    const currentRouter: BaseRouter = useRouter();
    console.log('currentRouter:', currentRouter);
    return (
        <SiderContainer collapsible collapsed={collapsed} /*onCollapse={toggle}*/ trigger={null}>
            <Spring
                native
                from={{
                    opacity: 0,
                    marginTop: -1000,
                }}
                to={{
                    opacity: 1,
                    marginTop: 0,
                    minHeight: collapsed ? '80px' : '176px',
                    minWidth: collapsed ? '80px' : '200px',
                    width: collapsed ? '65px' : '100px',
                    height: collapsed ? '65px' : '100px',
                    fontSize: collapsed ? '0rem' : '1rem',
                    marginRight: collapsed ? '0' : '200px',
                }}
            >
                {({ minHeight, minWidth, width, height, fontSize, opacity, marginTop }) => (
                    <>
                        <Logo
                            style={{
                                minHeight,
                                minWidth,
                                opacity,
                                marginTop,
                            }}
                        >
                            <AvatarImg
                                src="/images/user.jpg"
                                style={{
                                    width,
                                    height,
                                }}
                            />
                            <UsernameTitle
                                style={{
                                    fontSize,
                                }}
                            >
                                Ahmed Rezk
                            </UsernameTitle>
                            <UserTypeTitle
                                style={{
                                    fontSize: collapsed ? '0rem' : '0.8rem',
                                }}
                            >
                                Super Admin
                            </UserTypeTitle>
                        </Logo>
                    </>
                )}
            </Spring>
            <Spring
                native
                from={{
                    left: '-210px',
                }}
                to={{
                    left: '0px',
                    minWidth: collapsed ? 'auto' : '200px',
                }}
            >
                {({ left, minWidth }) => (
                    <>
                        <MenuContainer
                            style={{
                                left,
                                minWidth,
                            }}
                        >
                            <SiderMenu
                                defaultSelectedKeys={[currentRouter.pathname]}
                                defaultOpenKeys={[currentRouter.pathname !== '/' ? currentRouter.pathname : '']}
                                mode="inline"
                            >
                                {/* Home */}
                                <MenuItem key="/">
                                    <Link href="/" activeClassName="active">
                                        <a>
                                            <HiHome />
                                            Home
                                        </a>
                                    </Link>
                                </MenuItem>

                                {/* Users */}
                                <SubMenuContainer
                                    key="/users"
                                    title={
                                        <SubMenuTitle>
                                            <HiUsers />
                                            Users
                                        </SubMenuTitle>
                                    }
                                >
                                    <SubMenuItem key="/users">
                                        <Link href="/users">
                                            <a>Index</a>
                                        </Link>
                                    </SubMenuItem>

                                    <SubMenuItem key="/workers">
                                        <Link href="/workers">
                                            <a>Workers</a>
                                        </Link>
                                    </SubMenuItem>
                                </SubMenuContainer>

                                {/* Profile */}
                                <MenuItem key="/profile">
                                    <Link href="/profile">
                                        <a>
                                            <AiFillProfile />
                                            Profile
                                        </a>
                                    </Link>
                                </MenuItem>

                                {/* Notifications */}
                                <MenuItem key="/notifications">
                                    <Link href="/notifications">
                                        <a>
                                            <AiFillBell />
                                            Notifications
                                        </a>
                                    </Link>
                                </MenuItem>

                                {/* Messages */}
                                <MenuItem key="/messages">
                                    <Link href="/messages">
                                        <a>
                                            <FaEnvelope />
                                            Messages
                                        </a>
                                    </Link>
                                </MenuItem>

                                {/* Settings */}
                                <MenuItem key="/settings">
                                    <Link href="/settings">
                                        <a>
                                            <AiFillSetting />
                                            Settings
                                        </a>
                                    </Link>
                                </MenuItem>

                                {/* Help */}
                                <MenuItem key="/help">
                                    <Link href="/help">
                                        <a>
                                            <AiFillQuestionCircle />
                                            Help
                                        </a>
                                    </Link>
                                </MenuItem>

                                <MenuItem key="/error">
                                    <Link href="/error">
                                        <a>
                                            <AiFillWarning />
                                            404 page
                                        </a>
                                    </Link>
                                </MenuItem>
                            </SiderMenu>
                        </MenuContainer>
                    </>
                )}
            </Spring>
        </SiderContainer>
    );
};

export default Sidebar;
