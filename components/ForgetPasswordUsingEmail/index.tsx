import React, { memo } from 'react';
import { Form, Input, Button, Row } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { FormCard } from '@styled/Login';
import { CardHeader } from '@styled/Card';

interface Props {
    changeFormHandler: Function;
}

interface FormValues {
    email: string;
}

const Text = styled.p`
    text-align: 'center';
`;

const ForgetPasswordUsingEmail: React.FC<Props> = ({ changeFormHandler }) => {
    const handleSubmitForm = (values: FormValues) => {
        console.log('values:', values);
        changeFormHandler('#resetForm');
    };

    return (
        <FormCard>
            {/* Start => card header */}
            <CardHeader>
                <h3>Forget Password!</h3>

                <Text>We will send you an email that will allow you to reset your password.</Text>
            </CardHeader>
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
                <Form.Item>
                    <Row justify="center">
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            className="login-form-button"
                            // loading={fetching}
                        >
                            Send!
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

export default memo(ForgetPasswordUsingEmail);
