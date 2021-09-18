import * as React from 'react';
import { shallow } from 'enzyme';
import IndexPage from './index';

jest.mock('gatsby', () => ({ ...jest.requireActual('gatsby'), graphql: jest.fn() }));

describe('Index', () => {
  let props;

  beforeEach(() => {
    props = {
      data: { allMarkdownRemark: { nodes: [] } },
    };
  });

  it('should set the page title', () => {
    const comp = shallow(<IndexPage {...props} />);
    expect(comp.find('title').text()).toBe('Gatsby Netlify CI');
  });
});
