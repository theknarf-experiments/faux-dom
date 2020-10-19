const ErrorMessage = `
faux-dom:
Don't use this library directly, instead configure Webpack to replace it with a library of your choice like React, Preact or Isomorphic-jsx
In Jest add the following two lines in your test:
 
import React from 'react';
jest.mock('faux-dom', () => require('react'));
`;

const createElement = (type, attributes, ...children) => {
	throw ErrorMessage;
}

const fragment = ({ children }) => {
	throw ErrorMessage;
}

module.exports = {
	createElement,
	fragment
};
