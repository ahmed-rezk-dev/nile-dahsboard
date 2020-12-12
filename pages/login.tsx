import React, { useState } from 'react';
import LoginLayout from '@/components/LoginLayout';
import { animated, useTransition } from 'react-spring';
import LoginForm from '@/components/LoginForm';

import {
    MainContainer,
    LoginFooterContainer,
    LoginFooterLinksContainer,
    LoginFormContainer,
    LoginHeader,
    Separator,
    Text,
    Title,
} from '@/components/Styled/Login';
import { Button } from 'antd';
import { LinkedinOutlined, MailOutlined } from '@ant-design/icons';

type Props = React.FC & {
    Layout?: typeof LoginLayout;
};

const Login: Props = ({}) => {
    const [toggled, setToggled] = useState<string>('login');

    const changeFormHandler = (formName: string) => {
        setToggled(formName);
    };

    const items = { login: <LoginForm changeFormHandler={changeFormHandler} />, forgetPassword: '🤪' };

    const transition = useTransition(items[toggled], {
        from: {
            opacity: 0,
            transform: 'translate3d(100%,0,0)',
            position: 'absolute',
        },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-10%,0,0)' },
    });

    const transitionRender = transition((values, item) => <animated.div style={values as any}>{item}</animated.div>);

    const formHandler = React.useMemo(() => transitionRender, [toggled]);

    return (
        <MainContainer>
            <LoginHeader justify="center">
                <Title>Welcome</Title>
                <Text>Use this awesome form to login</Text>
                <Separator>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon className="separator-polygon" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </Separator>
            </LoginHeader>

            {/* Forms */}
            <LoginFormContainer justify="center">{formHandler}</LoginFormContainer>
            {/* <Button onClick={() => setToggled('forgetPassword')}>toggled</Button> */}
            {/* footer */}
            <LoginFooterContainer>
                <LoginFooterLinksContainer>
                    <Button
                        shape="circle"
                        size="large"
                        icon={<LinkedinOutlined />}
                        target="_block"
                        href="https://www.linkedin.com/in/ahmed-rezk-dev/"
                        title="Linkedin"
                    />
                    <Button
                        shape="circle"
                        size="large"
                        icon={<MailOutlined />}
                        href="mailto:work72019@gmail.com"
                        title="work72019@gmail.com"
                    />
                </LoginFooterLinksContainer>
                <p>
                    Pyramids Dashboard ©2020 Created by{' '}
                    <a href="http://ahmed-dev.com" target="_block">
                        Ahmed Rezk
                    </a>
                </p>
            </LoginFooterContainer>
        </MainContainer>
    );
};

Login.Layout = LoginLayout;

export default Login;
