import React from 'react';
import { Button, Section } from './index';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

/*
 *	The component library uses faux-dom, but we want to use React for testing purposes
 */
jest.mock('faux-dom', () => require('react'));

test('Button', () => {
	const onClick = jest.fn();
	render(<Button onClick={onClick}>Test</Button>);
	expect(screen.getByRole('button')).toHaveTextContent('Test');	

	fireEvent.click(screen.getByText('Test'));
	expect(onClick).toHaveBeenCalled();
});

test('Section', () => {
	render(<Section name="Section 1">Test</Section>);
	expect(screen.getByRole('heading')).toHaveTextContent('Section 1');	
	expect(screen.getByText('Test'));
});
