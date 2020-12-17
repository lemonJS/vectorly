import React from 'react';

import { ContextProvider } from '@components/builder/store';
import { Wrapper as ShelfWrapper } from '@components/shelf/layout/wrapper';

interface Props {
  path: string;
  children: React.ReactNode;
}

export function Wrapper(props: Props): JSX.Element {
  // Next.js will flash the page when you change routes
  // unless the wrapper is contained inside the _app
  // component
  const Component = props.path.includes('projects') ? Builder : Shelf;

  return (
    <Component {...props}>
      {props.children}
    </Component>
  );
}

export function Shelf(props: Props): JSX.Element {
  return (
    <ShelfWrapper>
      {props.children}
    </ShelfWrapper>
  );
}

export function Builder(props: Props): JSX.Element {
  return (
    <ContextProvider>
      {props.children}
    </ContextProvider>
  );
}
