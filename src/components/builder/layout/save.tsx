import React from 'react';

import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { projectSelector } from '@lib/project/selectors';
import { saveProject } from '@lib/project/helpers';

interface Props {
  children: React.ReactNode;
}

export function Save(props: Props): JSX.Element {
  const project = useSelector(projectSelector);

  const save = React.useCallback(debounce(saveProject, 1000), []);

  React.useEffect(() => save(project), [project])

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

