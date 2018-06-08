import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('App', () => {
  let component;
  let props;
  let instance;

  const render = () => {
    component = shallow(<App {...props} />);
    instance = component.instance();
  };
  
  beforeEach(() => {
    render();
  });
  
  describe('on instance', () => {
    it('should defined default states and props', () => {
      expect(component.state()).toEqual({});
    });
  });
});

