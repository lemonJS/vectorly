import React from 'react';

import { Wrapper as ShelfWrapper } from '@components/shelf/layout/wrapper';

interface Props {
  path: string;
  children: React.ReactNode;
}

export function Wrapper(props: Props): JSX.Element {
  // Next.js will flash the page when you change routes
  // unless the wrapper is contained inside the _app
  // component
  return props.path.includes('projects')
    ? <>{props.children}</>
    : <ShelfWrapper>{props.children}</ShelfWrapper>
}
