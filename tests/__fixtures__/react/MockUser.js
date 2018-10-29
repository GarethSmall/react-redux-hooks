//@flow
/**
 * TODO: Fix this. This is an issue with flow react type defs
 * $FlowFixMe
 */
import React, { memo } from 'react';

type Props = {
  name : string,
};

function MockUserComponent(props : Props) {
  const { name } = props;

  return <div>Full Name: {name}</div>;
}

const MockUser = memo(MockUserComponent);

export default MockUser;
