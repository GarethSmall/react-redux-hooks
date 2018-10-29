//@flow
import type { MockUser } from './users.mock';
import { MockActions } from './actions.mock';
import type {
  CreateMockUserAction,
  FetchMockUsersAction,
} from './actions.mock';

export type MockUserState = $ReadOnly<{
  users : MockUser[],
}>;

export const initialMockUserState : MockUserState = {
  users: [],
};

function mockUserReducer(
  state : MockUserState = initialMockUserState,
  action : CreateMockUserAction | FetchMockUsersAction,
) : MockUserState {
  switch (action != null && action.type) {
    /**
     * Reducer for creating mock users
     */
    case MockActions.CREATE_MOCK_USER: {
      const a : CreateMockUserAction = (action : any);
      /**
       * creating a new mock user from the name supplied from our action
       * @type {{id: number, name: string}}
       */
      const newMockUser : MockUser = {
        name: a.name,
      };

      return {
        ...state,
        users: [...state.users, newMockUser],
      };
    }
    /**
     * Reducer for fetching mock users
     * We won't do anything fancy here other than replace all old users
     */
    case MockActions.FETCH_MOCK_USERS: {
      const a : FetchMockUsersAction = (action : any);
      return {
        ...state,
        users: a.users,
      };
    }

    default: {
      return state;
    }
  }
}

export { mockUserReducer };
