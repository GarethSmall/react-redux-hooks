# Redux React Hooks

Redux React Hooks is an experimental library using an experimental version of react (16.7.0-alpha.0).

https://reactjs.org/docs/hooks-intro.html

# Why?

To learn, have fun, and provide a solution to a problem that will help other developers.

I won't be able to do this alone, all feedback is helpful!

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


```js
/* Import Redux Provider */
import { ReduxProvider } from 'redux-react-hooks';
import { userReducer } from '../myReducers/userReducer';

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

```js
/* Import Redux React hooks */
import { useReduxState, useReduxActions } from 'redux-react-hooks';
import { createUser } from '../myActions/userActions';

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

```js
/* import mockReduxStore */
import { mockReduxStore } from 'redux-react-hooks';
import renderer from 'react-test-renderer'
import { userReducer } from '../myReducers/userReducer';

describe('SomeComponent', () => {
    it('will create user', () => {
        /* create a mock store from a store */
        const mockStore = mockReduxStore.createStore(createStore(useReducer));

        /* Run tests */
        const component = renderer.create(<SomeComponent />);

        /* Finds a text input with the id username */
        const usernameInput = component.root.find(el => el.props.id === 'username');
        /* Finds a button with the id create-user
        const button = component.root.find(el => el.props.id === 'create-user');

        /** calls onChange event to set username field */
        usernameInput.props.onChange({
            target: {
                value: 'Gareth'
            }
        });

        /** calls the create user action */
        button.props.onClick();

        /* Re-render component */
        component.update(<SomeComponent />);


        /* Find a user with the name Gareth
        const usernameListItem = component.root.find(el => {
            return el.props.children === "Gareth";
        });

        /* assert we successfully dispatched an action and our state was update */
        expect(usernameListItem.props.children).toContain("Gareth");

        /* teardown mock store */
        mockStore.teardown();
    });
});
```
_In our first example we wrapped <SomeComponent /> in a ReduxProvider, we wont have to do that when testing._
# Sandbox

https://codesandbox.io/s/r709zvw47o