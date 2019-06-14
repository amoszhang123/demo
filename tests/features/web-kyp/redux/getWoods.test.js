import {
  WEB_KYP_GET_WOODS,
} from '../../../../src/features/web-kyp/redux/constants';

import {
  getWoods,
  reducer,
} from '../../../../src/features/web-kyp/redux/getWoods';

describe('web-kyp/redux/getWoods', () => {
  it('returns correct action by getWoods', () => {
    expect(getWoods()).toHaveProperty('type', WEB_KYP_GET_WOODS);
  });

  it('handles action type WEB_KYP_GET_WOODS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: WEB_KYP_GET_WOODS }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
