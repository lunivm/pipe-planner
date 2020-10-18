import React from 'react';

export function ContainerClassWrapper(className) {
  return function (props) {
    return <div className={className}>
      {props.children}
    </div>
  }
}
