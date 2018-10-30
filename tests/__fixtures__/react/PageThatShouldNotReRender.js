//@flow
import React from 'react';

export function PageThatShouldNotReRender() {
  console.log(1);
  return <div>Yahoo!</div>;
}
