/**
 *
 * LoginForm
 *
 */
import React from 'react';
import { Form, Input, Button, Row } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { FormCard, FormCardInfo, LoginFormButton } from '@styled/Login';
import { CardHeader } from '@styled/Card';
import { useRouter } from 'next/router';

interface Props {
    changeFormHandler: Function;
}

interface FormValues {
    email: string;
    password: string;
}

const LoginForm: React.FC<Props> = ({ changeFormHandler }) => {
    const router = useRouter();
    const handleSubmitForm = (values: FormValues) => {
        console.log('values', values);
        router.push('/');
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
                        <LoginFormButton type="primary" htmlType="submit" size="large">
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
