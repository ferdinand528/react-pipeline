import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
const { JSDOM } = require('jsdom');

// Configurar Enzyme
Enzyme.configure({ adapter: new Adapter() });

// Configurar JSDOM
const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop),
      }),
      {}
    );
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
