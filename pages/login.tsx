import React, { useEffect, useState } from 'react';
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
import ForgetPasswordUsingEmail from '@/components/ForgetPasswordUsingEmail';
import ResetForm from '@/components/ForgetPasswordUsingEmail/ResetForm';

type Props = React.FC & {
    Layout?: typeof LoginLayout;
};

const Login: Props = ({}) => {
    const [toggled, setToggled] = useState<string>('#login');

    // Getting location hash to toggle form if exist
    useEffect(() => {
        const urlHash = window.location.hash;
        if (urlHash !== '') setToggled(urlHash);
    }, []);

    // Change form handler
    const changeFormHandler = (formName: string) => {
        setToggled(formName);
    };

    // Setting up animation
    const transition = useTransition(toggled, null, {
        from: {
            opacity: 0,
            transform: 'translate3d(100%,0,0)',
            position: 'absolute',
        },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-10%,0,0)' },
    });

    // Render forms
    const transitionForms = () =>
        transition.map(({ item, props, key }) => {
            const loginForm = (
                <animated.div key={key} style={props}>
                    <LoginForm changeFormHandler={changeFormHandler} />
                </animated.div>
            );

            const forgetPasswordForm = (
                <animated.div key={key} style={props}>
                    <ForgetPasswordUsingEmail changeFormHandler={changeFormHandler} />
                </animated.div>
            );

            const resetPasswordForm = (
                <animated.div key={key} style={props}>
                    <ResetForm changeFormHandler={changeFormHandler} />
                </animated.div>
            );

            if (toggled === '#login') return loginForm;
            else if (toggled === '#forgetPassword') return forgetPasswordForm;
            else return resetPasswordForm;
        });

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
            <LoginFormContainer justify="center">{transitionForms()}</LoginFormContainer>

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
