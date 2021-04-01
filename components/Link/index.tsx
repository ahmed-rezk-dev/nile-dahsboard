import { Router, withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

interface Props {
    router: Router;
    children: any;
    href: string;
    activeClassName?: string;
}

const ActiveLink = ({ router, children, ...rest }: Props) => {
    const child = Children.only(children);

    let className = child.props.className || '';
    if (router.pathname === rest.href && rest.activeClassName) {
        className = `${className} ${rest.activeClassName}`.trim();
    }

    delete rest.activeClassName;

    return <Link {...rest}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
