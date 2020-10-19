import React from 'faux-dom';

/*
 *	Example components
 */

export const Button = ({ onClick, children }) => {
	return <button onClick={onClick}>{children}</button>;
}

export const Section = ({ name, children }) => {
	return <>
		<h1>{name}</h1>
		<section>{ children }</section>
	</>;
};

