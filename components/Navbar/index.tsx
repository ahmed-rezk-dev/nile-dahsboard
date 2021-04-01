/**
 *
 * Navbar
 *
 */

import React from 'react';
// core components
import { Row, Col } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops.cjs';
import UserMenu from 'components/UserMenu';
import NotificationsMenu from 'components/NotificationsMenu';
import { TriggerBtn, MainContainer } from 'components/Styled/Navbar';
import CustomBreadcrumb from 'components/CustomBreadcrumb';
import { AppContext } from 'store/context';
import { MenuToggleAction } from 'store/actions';
import { useRouter } from 'next/router';
import { BaseRouter } from 'next/dist/next-server/lib/router/router';

function Navbar() {
    const { state, dispatch } = React.useContext(AppContext);
    const { toggle } = state.sidebar;
    const currentRouter: BaseRouter = useRouter();

    const toggleHandler = () => {
        dispatch(MenuToggleAction({ toggle: !toggle }));
    };

    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(0,-140px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
        >
            {(props) => (
                <animated.div style={props}>
                    <MainContainer>
                        <Row align="middle">
                            <Col span={1}>
                                <TriggerBtn
                                    onClick={toggleHandler}
                                    icon={toggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                    size="large"
                                    ghost
                                />
                            </Col>
                            <Col xs={2} sm={4} md={6} lg={19} xl={21} xxl={21}>
                                {/* <CustomBreadcrumb /> */}
                                <CustomBreadcrumb currentRouter={currentRouter} />
                            </Col>
                            <Col>
                                <NotificationsMenu />
                                <UserMenu />
                            </Col>
                        </Row>
                    </MainContainer>
                </animated.div>
            )}
        </Spring>
    );
}

export default Navbar;
