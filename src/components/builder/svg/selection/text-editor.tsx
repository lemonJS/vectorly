import React from 'react';

import { css } from '@emotion/css';
import { Element } from '@type/project';
import { useDispatch } from 'react-redux';
import { updateProjectElement } from '@lib/projects/actions';
import { convertTextPropertiesToCss } from '@lib/text';

interface Props {
  element: Element;
  height: number;
  width: number;
}

const styles = css`
  textarea {
    background: transparent;
    border: none;
    color: red;
    height: 100%;
    margin: -1px 0 0 .5px;
    outline: none;
    padding: .5rem;
    resize: none;
    scrollbar-width: none;
    width: 100%;
    white-space: nowrap;
  }
`;

export function TextEditor(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const element = event.target as HTMLTextAreaElement;
    dispatch(updateProjectElement(props.element.elementId, { text: element.value }));
  }

  function handleFocus(event: React.FocusEvent<HTMLTextAreaElement>) {
    const element = event.target as HTMLTextAreaElement;
    element.setSelectionRange(999999, 999999);
  }

  if (props.element.type !== 'text') return null;

  return (
    <foreignObject className={styles} height={props.height} width={props.width}>
      <textarea
        autoFocus
        value={props.element.text}
        onChange={handleChange}
        onFocus={handleFocus}
        style={convertTextPropertiesToCss(props.element.props)}
      />
    </foreignObject>
  );
}
