import React from 'react';
import { shallow } from 'enzyme';
import { UserList } from '../../../src/features/web-kyp/UserList';

describe('web-kyp/UserList', () => {
  it('renders node with correct class name', () => {
    const props = {
      webKyp: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <UserList {...props} />
    );

    expect(
      renderedComponent.find('.web-kyp-user-list').length
    ).toBe(1);
  });
});
