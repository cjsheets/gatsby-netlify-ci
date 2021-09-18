import * as React from 'react';
import { shallow } from 'enzyme';
import StepTemplate from './steps';

jest.mock('gatsby', () => ({ ...jest.requireActual('gatsby'), graphql: jest.fn() }));

describe('StepTemplate', () => {
  let props;

  beforeEach(() => {
    const markdownRemark = { frontmatter: { title: 'test' }, html: {} };
    props = { data: { markdownRemark } };
  });

  it('should hydrate the step template', () => {
    const comp = shallow(<StepTemplate {...props} />);

    expect(comp.find('title').text()).toBe('Gatsby Netlify CI');
    expect(comp.find('section')).toHaveLength(1);
  });
});
