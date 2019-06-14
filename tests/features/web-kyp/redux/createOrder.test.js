import {
  WEB_KYP_CREATE_ORDER,
} from '../../../../src/features/web-kyp/redux/constants';

import {
  createOrder,
  reducer,
} from '../../../../src/features/web-kyp/redux/createOrder';

describe('web-kyp/redux/createOrder', () => {
  it('returns correct action by createOrder', () => {
    expect(createOrder()).toHaveProperty('type', WEB_KYP_CREATE_ORDER);
  });

  it('handles action type WEB_KYP_CREATE_ORDER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: WEB_KYP_CREATE_ORDER }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
