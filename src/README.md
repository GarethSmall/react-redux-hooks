# Class

# Function

## `resetMockReduxStoreMap()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `setMockReduxStoreMap(storeMap: ReduxStoreMap): function`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| storeMap | ReduxStoreMap |  |

## `throwErrorOnCondition(isError: boolean, isErrorMessage: string): void | Error`

Takes a condition returns nothing or throws an error.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| isError | boolean |  |
| isErrorMessage | string |  |

## `warnOnCondition(isWarn: boolean, isWarnMessage: string): void`

Takes a condition returns nothing or throws an error.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| isWarn | boolean |  |
| isWarnMessage | string |  |

## `useReduxActions(actions: *, storeKey: *): ActionCreatorsMapObject`

Takes a map of actions and outputs bound actions

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| actions | * |  |
| storeKey | * |  |

## `useReduxProviderContext(): ReduxStoreMap`

Return our global context

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `defaultReduxStateFunction(state: Object): Object`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | Object |  |

## `subscribeToStore(store: *, selectFn: *, onChange: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| store | * |  |
| selectFn | * |  |
| onChange | * |  |

## `useReduxState(storeKey: *, stateFn: *): *`

Access state within a redux store housed in ReduxProviderContext

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| storeKey | * |  |
| stateFn | * |  |

## `useReduxStore(storeKey: *, storeMap: *): *`

Get a redux store from our provider context based on it's UniqueReduxStoreKey If no value is provided we use our default store if one exists.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| storeKey | * |  |
| storeMap | * |  |