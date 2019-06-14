import React from 'react';
import { shallow } from 'enzyme';
import { Woods } from '../../../src/features/web-kyp/Woods';

describe('web-kyp/Woods', () => {
  it('renders node with correct class name', () => {
    const props = {
      webKyp: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Woods {...props} />
    );

    expect(
      renderedComponent.find('.web-kyp-woods').length
    ).toBe(1);
  });
});
