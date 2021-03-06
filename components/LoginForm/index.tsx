/**
 *
 * LoginForm
 *
 */
import React, { useContext } from 'react';
import { Form, Input, Button, Row } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { FormCard, FormCardInfo, LoginFormButton } from '@styled/Login';
import { CardHeader } from '@styled/Card';
import { useRouter } from 'next/router';
import { useLoginMutation } from 'generated/graphql';
import { AppContext } from 'store/context';
import { setAuthAction } from 'store/actions';
import { useApollo } from '@graphql/apollo';

interface Props {
    changeFormHandler: Function;
}

interface FormValues {
    email: string;
    password: string;
}

const LoginForm: React.FC<Props> = ({ changeFormHandler }) => {
    const router = useRouter();
    const { dispatch } = useContext(AppContext);
    const [login, { loading }] = useLoginMutation();

    const handleSubmitForm = async (values: FormValues) => {
        try {
            const { data } = await login({ variables: values });
            const payload = { token: data?.login.token, userId: data?.login.user?.id };
            setTimeout(() => {
                router.push('/');
            }, 1000);
            useApollo({ auth: payload });
            dispatch(setAuthAction(payload));
        } catch (error) {}
    };

    return (
        <FormCard>
            <CardHeader>
                <h3>Login</h3>
            </CardHeader>
            <FormCardInfo>
                <p>Email: work72019@gmail.com</p>
                <p>Password: 123456</p>
            </FormCardInfo>
            <Form onFinish={handleSubmitForm}>
                <Form.Item
                    hasFeedback
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" size="large" />
                </Form.Item>
                <Form.Item>
                    <Row justify="center">
                        <LoginFormButton type="primary" htmlType="submit" size="large" data-test-id="login-button" loading={loading} disabled={loading} >
                            Login
                        </LoginFormButton>
                    </Row>
                    <Row justify="center">
                        <Button type="link" onClick={() => changeFormHandler('#forgetPassword')} href="#forgetPassword">
                            Forget Password
                        </Button>
                    </Row>
                </Form.Item>
            </Form>
        </FormCard>
    );
};

export default LoginForm;
