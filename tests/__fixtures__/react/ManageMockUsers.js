// @flow
import React from 'react';
import { useReduxState } from '../../../src/useReduxState';
import MockUserList from './MockUserList';
import { useReduxActions } from '../../../src/useReduxActions';
import { createMockUser, fetchMockUsers } from '../redux/actions.mock';

export function ManageMockUsers() {
  const { users } = useReduxState();
  const { createUser, fetchUsers } = useReduxActions({
    createUser: createMockUser,
    fetchUsers: fetchMockUsers,
  });

  /* $FlowFixMe */
  const [name, setName] = React.useState('');
  return (
    <>
      <input id="username" type="text" value={name} onChange={setName} />
      <button id="create-users" onClick={() => createUser(name)}>
        Create User
      </button>
      <button id="fetch-users" onClick={fetchUsers}>
        Fetch Users
      </button>
      <MockUserList users={users} />
    </>
  );
}
