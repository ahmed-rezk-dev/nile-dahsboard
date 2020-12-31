import {cleanup} from '@testing-library/react';
import React from 'react';
import IndexPage from './index';
import {render} from './test-utils';

afterEach(cleanup);

describe('App', () => {
    it('renders without crashing', () => {
        const {getByRole} = render(<IndexPage />);
        expect(getByRole('heading', {name: 'Hello Next.js 👋'})).toBeInTheDocument();
    });
});
