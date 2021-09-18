/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';

const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adapter() });
