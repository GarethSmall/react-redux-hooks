//@flow
import { mockUsersArray } from './users.mock';
import type { MockUser } from './users.mock';

export const MockActions = {
  CREATE_MOCK_USER: 'CREATE_MOCK_USER',
  FETCH_MOCK_USERS: 'FETCH_MOCK_USERS',
};

export type MockActionType = $Values<typeof MockActions>;

export type CreateMockUserAction = {
  type : MockActionType,
  name : string,
}

/**
 * create a mock user
 * @param name
 * @returns {{type: string, name: string}}
 */
export function createMockUser(name : string) : CreateMockUserAction {
  return {
    type: MockActions.CREATE_MOCK_USER,
    name,
  };
}

export type FetchMockUsersAction = {
  type : MockActionType,
  users : MockUser[],
};

/**
 * fetch mock users from our mock user list
 * @returns {{type: string, users: MockUser[]}}
 */
export function fetchMockUsers() : FetchMockUsersAction {
  return {
    type: MockActions.FETCH_MOCK_USERS,
    users: mockUsersArray,
  };
}

