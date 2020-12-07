/**
 *
 * CustomBreadcrumb
 *
 */

import React from 'react';
import { Breadcrumb } from 'antd';
import * as Icons from '@ant-design/icons';
import { BreadcrumbContainer } from '@/components/Styled/Navbar';
import routesList, { RouteList } from 'utils/routesList';
import { BaseRouter } from 'next/dist/next-server/lib/router/router';

interface Props {
    currentRouter: BaseRouter;
}

function CustomBreadcrumb({ currentRouter }: Props) {
    const findRoute: RouteList | undefined = routesList.find((route) => route.path === currentRouter.pathname);

    const breadcrumbFunc = () => {
        if (findRoute) {
            const ItemIcon = findRoute.icon;
            const GroupIcon = findRoute.group ? findRoute.group.icon : React.Fragment;
            return (
                <>
                    {findRoute.group !== undefined ? (
                        <Breadcrumb.Item>
                            <GroupIcon />
                            <span>{findRoute.group.name}</span>
                        </Breadcrumb.Item>
                    ) : null}
                    <Breadcrumb.Item>
                        <ItemIcon />
                        <span>{findRoute.name}</span>
                    </Breadcrumb.Item>
                </>
            );
        }
    };

    return (
        <BreadcrumbContainer>
            <Breadcrumb.Item>
                <Icons.HomeOutlined />
                <span>Home</span>
            </Breadcrumb.Item>
            {breadcrumbFunc()}
        </BreadcrumbContainer>
    );
}

export default CustomBreadcrumb;
