import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test', () => {
	test('renders App Component', () => {
		render(<App />);
		screen.debug();
	})
})
  
