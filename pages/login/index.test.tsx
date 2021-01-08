import { act, fireEvent, getByRole, render, screen, waitFor } from '../test/test-utils';
import Login from '.';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import { gql, InMemoryCache } from '@apollo/client/core';
// import { User } from "graphql/queries/user.graphql";
// import LoginForm from '../../components/LoginForm';

import { UserDocument, LoginDocument } from '../../generated/graphql';

// jest.mock('../../components/LoginForm', () => () => <div data-testid="login-form" />);

const waitForResponse = () => new Promise((res) => setTimeout(res, 0));

const cache = new InMemoryCache();
cache.writeQuery({
    query: gql`
        query User {
            user {
                refreshToken
                tokenExpiry
                userId
            }
        }
    `,
    data: {
        user: {
            refreshToken: '',
            tokenExpiry: '',
            userId: '',
        },
    },
});

const mocks = [
    {
        request: {
            query: LoginDocument,
            variables: {
                email: 'test@test.com',
                password: '123456',
            },
        },
        result: {
            data: {
                user: {
                    email: 'test@test.com',
                    password: '123456',
                    auth: {
                        refreshToken: 'jlkfjslkfjlkjflkajslf;',
                        tokenExpiry: 'rawrkljawklrjworwopir',
                        userId: '1',
                    },
                },
            },
        },
    },
];

describe('Login::ForgetPassword::ResetPassword', () => {
    let component;

    beforeEach(() => {
        component = (
            <MockedProvider cache={cache}>
                <Login />
            </MockedProvider>
        );
    });

    it('Should have container', () => {
        const { getByText } = render(component);
        expect(getByText('Use this awesome form to login')).toBeInTheDocument();
    });

    it('Should have login form', () => {
        const { getByRole } = render(component);

        const loginTestId = getByRole('heading', { name: 'Login' });
        expect(loginTestId).toBeInTheDocument();
    });

    it('If user logged in', async () => {
        const { debug, getByPlaceholderText, getByRole, container } = render(
            <MockedProvider cache={cache} mocks={mocks} addTypename={false}>
                <Login />
            </MockedProvider>
        );

        const loginButton = getByRole('button', { name: 'Login' });
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');
        expect(loginButton).toBeInTheDocument();

        // fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        // fireEvent.change(passwordInput, { target: { value: 'test@test.com' } });
        await act(async () => {
            // fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
            // fireEvent.change(passwordInput, { target: { value: 'test@test.com' } });
            userEvent.type(emailInput, 'test@test.com');
            userEvent.type(passwordInput, 'test@test.com');
        });

        await act(() => waitForResponse());
        // await act(async () => {
        //     userEvent.click(loginButton);
        // });

        // userEvent.click(loginButton);
        // debug();

        const updatedCache = cache.extract();
        console.log('🛎 updatedCache: => ', updatedCache);
        console.log('🛎 container : => ', container.children);

        debug();
    });

    it('Should have forget password form', () => {
        //  TODO
    });

    it('Should have reset password form', () => {
        // TODO
    });
});
