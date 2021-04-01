import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { animated } from 'react-spring';
const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderContainer = styled(Sider)`
    background: #f9f9f900;
    overflow: hidden;
`;

const Logo = styled(animated.div)`
    display: flex;
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.primaryColor};
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    will-change: transform;
`;

const AvatarImg = styled(animated.img)`
    background-color: ${(props) => props.theme.colors.white};
    background-clip: initial;
    border: 4px solid fade(${(props) => props.theme.colors.layoutHeaderBackground}, 80%);
    border-radius: 100rem;
    box-shadow: 0 2px 8px fade(${(props) => props.theme.colors.layoutHeaderBackground}, 80%);
    object-fit: cover;
    width: 125px;
    max-height: 125px;
`;

const UsernameTitle = styled(animated.h3)`
    margin: 0.5rem 0 0;
    text-align: center;
    font-size: 1rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.secondaryColor};
`;

const UserTypeTitle = styled(animated.h3)`
    text-align: center;
    font-size: 0.8rem;
    font-weight: 200;
    color: ${(props) => props.theme.colors.normalColor};
`;

// menu
const MenuContainer = styled(animated.div)`
    position: absolute;
    top: 30%;
    left: 0;
    flex: 0 0 200px;
    max-width: 200px;
`;

const SiderMenu = styled(Menu)`
    background-color: ${(props) => props.theme.colors.sidebarBackground};
    border: 1px solid ${(props) => props.theme.colors.sidebarBackground};
    padding: 1rem 0.5rem;
    border-radius: 1rem;
    height: 65vh;
    position: fixed;
    max-width: 200px;
    .ant-menu-item {
        color: ${(props) => props.theme.colors.white};
        margin: 0.5rem 0;
        font-size: ${(props) => props.theme.fontSizes.sidebar};
        svg {
            margin-right: 0.5rem;
        }
    }
    .ant-menu-item-selected {
        background-color: ${(props) => props.theme.colors.sidebarBackgroundSelected} !important;
        width: auto;
        border-radius: 1rem;
        a {
            color: ${(props) => props.theme.colors.sidebarBackground};
        }
    }
    .ant-menu-item-active {
        background-color: ${(props) => props.theme.colors.sidebarBackgroundSelected} !important;
        width: auto;
        border-radius: 1rem;
        a {
            color: ${(props) => props.theme.colors.sidebarBackground};
        }
    }
    .ant-menu-submenu {
        border-radius: 1rem;
        margin: 0.5rem 0;
    }
    .ant-menu-submenu-open {
        background-color: ${(props) => props.theme.colors.white} !important;
        .ant-menu-submenu-title {
            span {
                color: ${(props) => props.theme.colors.sidebarBackground} !important;
            }
            .ant-menu-submenu-arrow {
                &::before,
                &::after {
                    background: ${(props) => props.theme.colors.sidebarBackground} !important;
                }
            }
            border-bottom: solid 1px ${(props) => props.theme.colors.sidebarBackground} !important;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
`;

const MenuItem = styled(Menu.Item)`
    border-radius: 1rem;
    a {
        color: ${(props) => props.theme.colors.white};
        display: inline-flex !important;
        align-items: center;
        .anticon {
            margin-right: 0.5rem !important;
        }
    }
    &::after {
        transform: none;
        border: 0 !important;
    }
`;

const SubMenuContainer = styled(SubMenu)`
    .ant-menu-submenu-title {
        border-radius: 1rem;
        font-size: ${(props) => props.theme.fontSizes.sidebar};
        svg {
            margin-right: 0.5rem;
        }
    }
    .ant-menu {
        border-radius: 1rem;
        padding: 0.5rem;
    }
    .ant-menu-submenu-arrow {
        &::before,
        &::after {
            background: ${(props) => props.theme.colors.white} !important;
        }
    }
    /* Sub menu item */
    .ant-menu-item {
        a {
            color: ${(props) => props.theme.colors.sidebarBackground};
        }
    }

    .ant-menu-item-selected {
        background-color: ${(props) => props.theme.colors.sidebarBackground} !important;
        a {
            color: ${(props) => props.theme.colors.white};
        }
    }
`;

const SubMenuTitle = styled.span`
    color: ${(props) => props.theme.colors.white};
    display: inline-flex !important;
    align-items: center;
`;

const SubMenuItem = styled(Menu.Item)`
    border-radius: 1rem;
    padding-left: 1rem !important;
    a {
        display: inline-flex !important;
        .anticon {
            margin-right: 0.5rem !important;
        }
        align-items: center;
    }
    &::after {
        transform: none;
        border: 0 !important;
    }
`;

export {
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
};
