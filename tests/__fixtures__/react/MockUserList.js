//@flow
import React from 'react';
import MockUserListItem from './MockUserListItem';
import type { MockUser } from '../redux/users.mock';

type Props = {
  users : MockUser[],
};
function MockUserList(props : Props) {
  const { users } = props;
  return (
    <ul>
      {users.map(u => (
        <MockUserListItem key={u.id} name={u.name} />
      ))}
    </ul>
  );
}

export default MockUserList;
