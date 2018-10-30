import {
  DefaultReduxStoreKey,
  ReduxProviderContext,
} from './ReduxProviderContext';

describe('ReduxProviderContext', () => {
  it('will provide an empty object', () => {
    expect(ReduxProviderContext._currentValue).toEqual({});
  });
});

describe('DefaultReduxStoreKey', () => {
  it('will provide a symbol for our default key', () => {
    /**
     * This is a bit redundant, but we should catch this if it changes.
     */
    expect(DefaultReduxStoreKey.toString()).toEqual(
      Symbol('UniqueDefaultReduxStoreKey!').toString(),
    );
  });
});
