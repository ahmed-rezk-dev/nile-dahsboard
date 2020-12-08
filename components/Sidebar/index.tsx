/**
 *
 * Sidebar
 *
 */

import React, { useContext } from 'react';
import { Spring } from 'react-spring';
import {
    BellFilled,
    MessageFilled,
    ProfileFilled,
    TeamOutlined,
    HomeFilled,
    SettingFilled,
    QuestionCircleFilled,
    WarningFilled,
} from '@ant-design/icons';
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
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BaseRouter } from 'next/dist/next-server/lib/router/router';
import { AppContext } from 'store/context';
import { MenuToggleAction } from 'store/actions';

const Sidebar = () => {
    const currentRouter: BaseRouter = useRouter();
    const { state, dispatch } = useContext(AppContext);
    const { toggle } = state.sidebar;

    const toggleHandler = () => {
        dispatch(MenuToggleAction({ toggle: !toggle }));
    };

    return (
        <SiderContainer collapsible collapsed={toggle} onCollapse={toggleHandler} trigger={null}>
            <Spring
                from={{
                    opacity: 0,
                    marginTop: -1000,
                }}
                to={{
                    opacity: 1,
                    marginTop: 0,
                    minHeight: toggle ? '70px' : '176px',
                    minWidth: toggle ? '80px' : '200px',
                    width: toggle ? '65px' : '100px',
                    height: toggle ? '65px' : '100px',
                    fontSize: toggle ? '0rem' : '1rem',
                    marginRight: toggle ? '0' : '200px',
                    display: toggle ? 'none' : 'block',
                }}
            >
                {({ minHeight, minWidth, width, height, display, opacity, marginTop }) => (
                    <Logo
                        style={
                            {
                                minHeight,
                                minWidth,
                                opacity,
                                marginTop,
                            } as any
                        }
                    >
                        <AvatarImg
                            src="/images/user.jpg"
                            style={{
                                width,
                                height,
                            }}
                        />
                        <UsernameTitle
                            style={
                                {
                                    display,
                                } as any
                            }
                        >
                            Ahmed Rezk
                        </UsernameTitle>
                        <UserTypeTitle
                            style={
                                {
                                    display,
                                } as any
                            }
                        >
                            Super Admin
                        </UserTypeTitle>
                    </Logo>
                )}
            </Spring>

            <Spring
                from={{
                    left: '-210px',
                }}
                to={{
                    left: '0px',
                    minWidth: toggle ? 'auto' : '200px',
                }}
            >
                {({ left, minWidth }) => (
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
                                <Link href="/">
                                    <a>
                                        <HomeFilled />
                                        <span>Home</span>
                                    </a>
                                </Link>
                            </MenuItem>

                            {/* Users */}
                            <SubMenuContainer
                                key="/users"
                                title={
                                    <SubMenuTitle>
                                        <TeamOutlined />
                                        <span>Users</span>
                                    </SubMenuTitle>
                                }
                            >
                                <SubMenuItem key="/users">
                                    <Link href="/users">
                                        <a>All Users</a>
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
                                        <ProfileFilled />
                                        <span>Profile</span>
                                    </a>
                                </Link>
                            </MenuItem>

                            {/* Notifications */}
                            <MenuItem key="/notifications">
                                <Link href="/notifications">
                                    <a>
                                        <BellFilled />
                                        <span>Notifications</span>
                                    </a>
                                </Link>
                            </MenuItem>

                            {/* Messages */}
                            <MenuItem key="/messages">
                                <Link href="/messages">
                                    <a>
                                        <MessageFilled />
                                        <span>Messages</span>
                                    </a>
                                </Link>
                            </MenuItem>

                            {/* Settings */}
                            <MenuItem key="/settings">
                                <Link href="/settings">
                                    <a>
                                        <SettingFilled />
                                        <span>Settings</span>
                                    </a>
                                </Link>
                            </MenuItem>

                            {/* Help */}
                            <MenuItem key="/help">
                                <Link href="/help">
                                    <a>
                                        <QuestionCircleFilled />
                                        <span>Help</span>
                                    </a>
                                </Link>
                            </MenuItem>

                            <MenuItem key="/error">
                                <Link href="/error">
                                    <a>
                                        <WarningFilled />
                                        <span>404 page</span>
                                    </a>
                                </Link>
                            </MenuItem>
                        </SiderMenu>
                    </MenuContainer>
                )}
            </Spring>
        </SiderContainer>
    );
};

export default Sidebar;
