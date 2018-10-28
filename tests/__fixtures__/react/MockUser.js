//@flow
import React from 'react';

type Props = {
  name : string,
}

function MockUserComponent(props : Props) {
  const { name } = props;

  return (
    <div>
      Full Name: {name}
    </div>
  );
}

/**
 * TODO: fix me in the future.
 * flow has issues handling memo at this current time
 * 10/28/2018
 * @type {{$$typeof, type, compare}}
 */
// $FlowFixMe
const MockUser = React.memo(MockUserComponent);

export default MockUser;