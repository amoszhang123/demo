import {
  WEB_KYP_GET_USERS,
} from '../../../../src/features/web-kyp/redux/constants';

import {
  getUsers,
  reducer,
} from '../../../../src/features/web-kyp/redux/getUsers';

describe('web-kyp/redux/getUsers', () => {
  it('returns correct action by getUsers', () => {
    expect(getUsers()).toHaveProperty('type', WEB_KYP_GET_USERS);
  });

  it('handles action type WEB_KYP_GET_USERS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: WEB_KYP_GET_USERS }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
