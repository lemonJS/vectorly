import React from 'react';

import { Design } from '@type/design';
import { Create } from '@components/shelf/design/create';

interface Props {
  design: Design;
}

export function Details(props: Props): JSX.Element {
  return (
    <div>
      <h1>{props.design.title}</h1>
      <p>{props.design.description}</p>

      <Create />
    </div>
  );
}
