import React from 'react';

import { css } from '@emotion/css';
import { Element, updateElement } from '@store/project';
import { useDispatch } from 'react-redux';
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
    outline: none;
    padding: calc(.5rem - 2px) calc(.5rem - 1px);
    resize: none;
    scrollbar-width: none;
    width: 100%;
    white-space: pre;
  }
`;

export const TextEditor = (props: Props): JSX.Element | null => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = event.target as HTMLTextAreaElement;
    dispatch(updateElement(props.element.id, { text: element.value }));
  };

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const element = event.target as HTMLTextAreaElement;
    element.setSelectionRange(999999, 999999);
  };

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
};
