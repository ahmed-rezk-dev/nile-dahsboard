import { render, cleanup } from '../test-utils';
// import Login from '.';
import About from '../about';
import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/dom';

describe('Login::ForgetPassword::ResetPassword', () => {
    const { getByRole, debug, getByText } = render(<About />);

    debug();

    it('Should have container', () => {
        // expect(getByText('/Use this awesome form to login/i')).toBeInTheDocument();
    });

    it('Should have login form', () => {
        // TODO
    });

    it('Should have forget password form', () => {
        // TODO
    });

    it('Should have reset password form', () => {
        // TODO
    });
});
