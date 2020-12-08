import {
    TeamOutlined,
    OrderedListOutlined,
    BellOutlined,
    MessageOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    WarningOutlined,
} from '@ant-design/icons';
export interface RouteList {
    path: string;
    name: string;
    icon: any;
    hidden?: Boolean;
    group?: UserGroup;
}
interface UserGroup {
    name: string;
    icon: any;
}
const userGroup = {
    name: 'users',
    icon: TeamOutlined,
};

const routesList: RouteList[] = [
    {
        path: '/profile',
        name: 'Profile',
        icon: 'ProfileFilled',
    },
    {
        path: '/users',
        group: userGroup,
        name: 'All Users',
        icon: OrderedListOutlined,
    },
    {
        path: '/notifications',
        name: 'Notifications',
        icon: BellOutlined,
    },
    {
        path: '/messages',
        name: 'Messages',
        icon: MessageOutlined,
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: SettingOutlined,
    },
    {
        path: '/help',
        name: 'Help',
        icon: QuestionCircleOutlined,
    },
    {
        path: '/error',
        name: '404 Example',
        icon: WarningOutlined,
    },
    {
        path: '/groups',
        group: userGroup,
        name: 'Users Groups',
        icon: 'LikeOutlined',
    },
    {
        path: '/users/group/edit',
        name: 'Edit Group',
        icon: 'LikeOutlined',
        hidden: true,
    },
];

export default routesList;
