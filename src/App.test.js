import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('Login', () => {
  let component;
  let props;
  let instance;

  const render = () => {
    props = {
    };
    
    component = shallow(<App {...props} />);
    instance = component.instance();
  };

  beforeEach(() => {
    // render();
  });

  it('renders without crashing', () => {
    // expect(component.state().form).toEqual();
  });
});