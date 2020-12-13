import React, { memo } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Row } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { FormCard } from '@styled/Login';
import { CardHeader } from '@styled/Card';

const Text = styled.p`
    text-align: 'center';
`;

interface Props {
    changeFormHandler: Function;
}

interface Values {
    password: string;
    confirm: string;
}

const ResetForm: React.FC<Props> = ({ changeFormHandler }) => {
    const handleSubmitForm = (values: Values) => {
        console.log('values', values);
    };

    return (
        <FormCard>
            {/* Start => card header */}
            <CardHeader>
                <h3>Reset Password!</h3>

                <Text>Please enter your new password.</Text>
            </CardHeader>

            <Form onFinish={handleSubmitForm}>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" size="large" />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Confirm Password"
                        size="large"
                    />
                </Form.Item>
                <Form.Item>
                    <Row justify="center">
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            className="login-form-button"
                            // loading={fetching}
                        >
                            Done!
                        </Button>
                    </Row>
                    <Row justify="center">
                        {/* Start => Forget Password link */}
                        <Button type="link" onClick={() => changeFormHandler('#login')} href="#login">
                            Login
                        </Button>
                    </Row>
                </Form.Item>
            </Form>
        </FormCard>
    );
};

export default memo(ResetForm);
