import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const styles = css`
  color: white;
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: .75rem;
`;

export function Label(props: Props): JSX.Element {
  const { className, children, ...rest } = props;

  return (
    <label className={`${styles} ${className}`} {...rest}>
      {children}
    </label>
  );
}
