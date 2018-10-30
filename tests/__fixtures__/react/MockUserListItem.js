//@flow
/**
 * TODO: Fix this. This is an issue with flow react type defs
 * $FlowFixMe
 */
import React, { memo } from 'react';

type Props = {
  name : string,
};

function MockUserListItemComponent(props : Props) {
  const { name } = props;
  return <li>Full Name: {name}</li>;
}

const MockUserListItem = memo(MockUserListItemComponent);

export default MockUserListItem;
