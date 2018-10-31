# Redux React Hooks

Redux React Hooks is an experimental library using an experimental version of react (16.7.0-alpha.0).

# Why?

To learn and have fun of course, and to make life easier for other developers!

I won't be able to do this alone, as one person I can built something that I think will be useful, but it will be up to you to provide feedback to improve redux react hooks.

# Current todos and goals

There is still a lot to be done.

- Implement better testing
- Understand the implications of certain patterns
- Work to prove a smooth developing and testing experience


# Getting Started

1.) First you will have to install redux-react-hooks, to install all you have to do is run:

```
npm i redux-react-hooks
```

_To implement, you must be using React >=16.7.0-alpha.0, and redux._


2.) To start using redux-react-hooks, you will still have to wrap the components you want to have access to your store within a "ReduxProvider"


```
/* Import Redux Provider */
import { ReduxProvider } from 'redux-react-hooks';
import { userReducer } from '../MyReducers/userReducer.js';

/* create your store */
const store = createStore(userReducer);

function App() {
    return (
        {/* pass your store to the provider and wrap your component with ReduxProvider */
        <ReduxProvider store={store}>
            <SomeComponent />
        </ReduxProvider>
    );
}
```

3.) Finally, you can begin using your redux react hooks within your components:

```
/* Import Redux React hooks */
import { useReduxState, useReduxActions } from 'redux-react-hooks';

function SomeComponent() {
    /* Allows us to access our state */
    const { users } = useReduxState(state => ({
       users: state.User.users
    }));

    /* binds our actions */
    const actions = useReduxActions({
        createUser
    });

    actions.createUser('Gareth');
   ...
}
```
# Testing

Before hooks, testing connected components was a pain.

1.) To test a component using redux-react-hooks, you must create a mock store.

_Make sure your NODE_ENV=test_

```
/* import mockReduxStore */
import { mockReduxStore } from "redux-react-hooks";
import { userReducer } from '../MyReducers/userReducer.js';

describe("SomeApp", () => {
  it("will create user", () => {
      /* create a mock store from a store */
      const mockStore = mockReduxStore.createStore(createStore(useReducer));

      /* Run tests */
      ...

      /* teardown mock store */
      mockStore.teardown();
  });
});
```
_In our first example we wrapped <SomeComponent /> in a ReduxProvider, we wont have to do that when testing.
# Sandbox

https://codesandbox.io/s/r709zvw47o