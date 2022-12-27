import React from 'react';
import {render, screen} from "@testing-library/react";
import { MainPage } from '../components/MainPage';

describe('Main page', () => {
    it('should display the main page title', () => {
        render(<MainPage/>);

        expect(screen.getByText(/simpsons quotes/i)).toBeInTheDocument();
    })
})