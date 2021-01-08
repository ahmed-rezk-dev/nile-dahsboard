import { cleanup } from '@testing-library/react';
import React from 'react';
import AboutPage from './about';
import { render } from './test/test-utils';

afterEach(cleanup);

describe('App', () => {
    it('renders without crashing', () => {
        const { getByRole } = render(<AboutPage />);
        expect(getByRole('heading', { name: 'About' })).toBeInTheDocument();
    });
});
