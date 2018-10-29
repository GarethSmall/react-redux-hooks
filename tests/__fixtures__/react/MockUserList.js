//@flow
import React from 'react';
import useReduxState from '../../../src/useReduxState';

function MockUserList() {
  const state = useReduxState(s => ({
    newUsers: s.users,
  }));
  return <div>hi</div>;
}

export default MockUserList;
