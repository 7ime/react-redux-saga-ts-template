import '@testing-library/jest-dom';
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Button from './index';

describe('Button component', () => {
    it('Render button', () => {
        const buttonText = 'Submit';

        render(<Button>{buttonText}</Button>);

        expect(screen.queryByText(buttonText)).toBeInTheDocument();
    });
});