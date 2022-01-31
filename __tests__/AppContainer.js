import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import AppContainer from '../src/components/AppContainer/index.jsx'

describe('AppContainer Component', ()=>{
    it('AppContainer snapshot', ()=>{
        const appContainer = render(<AppContainer/>);
        expect(appContainer).toMatchSnapshot();
    });
    it('renders successfully', ()=>{
        render(<AppContainer/>);
        expect(screen.getByText(/App Content/)).toBeInTheDocument();
    });
});