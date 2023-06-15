import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'; 
import App from '../src/App';

describe('App', () => {
  it('should render the correct header text', () => {
    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const headerText = wrapper.find('h1').text();
    expect(headerText).to.equal('2do Parcial de Ing de Sw - 2023');
  });
});
