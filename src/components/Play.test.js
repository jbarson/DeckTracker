//import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Play from './Play';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Play />, div);
});

it('adds two numbers', ()=>{
  expect(3+2).toBe(5);	
});
