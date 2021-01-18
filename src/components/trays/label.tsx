import React from 'react';

import { css } from '@emotion/css';

type Props = React.LabelHTMLAttributes<HTMLLabelElement>

const styles = css`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: .75rem;
  padding: 0 .5rem 0 1.5rem;
`;

export const Label = (props: Props): JSX.Element => {
  const { className, children, ...rest } = props;

  return (
    <label className={`${styles} ${className || ''}`} {...rest}>
      {children}
    </label>
  );
};
