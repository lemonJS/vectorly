import React from 'react';

import { css } from '@emotion/css';
import { Element } from '@type/project';
import { Label } from '@components/common/label';
import { TextArea } from '@components/common/textarea';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<Element>) => void;
}

const styles = css`
  label {
   margin-top: 2rem;
  }
`;

export function Contents(props: Props): JSX.Element {
  const { text } = props.element;

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const element = event.target as HTMLTextAreaElement;
    props.handleUpdate({ text: element.value });
  }

  return (
    <div className={styles}>
      <Label>Contents</Label>
      <TextArea value={text} onChange={handleChange} rows={5} />
    </div>
  );
}
