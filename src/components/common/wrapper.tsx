import React from 'react';

import { ContextProvider } from '@components/builder/store';
import { Wrapper as CommonWrapper } from '@components/common/layout/wrapper';

interface Props {
  route: string;
  children: React.ReactNode;
}

function getWrapperComponent(route: string) {
  switch(route) {
    case '/projects/[id]':
      return Builder;
    default:
      return Common;
  }
}

export function Wrapper(props: Props): JSX.Element {
  // Next.js will flash the page when you change routes
  // unless the wrapper is contained inside the _app
  // component
  const Component = getWrapperComponent(props.route);

  return (
    <Component {...props}>
      {props.children}
    </Component>
  );
}

export function Common(props: Props): JSX.Element {
  return (
    <CommonWrapper>
      {props.children}
    </CommonWrapper>
  );
}

export function Builder(props: Props): JSX.Element {
  return (
    <ContextProvider>
      {props.children}
    </ContextProvider>
  );
}
