import React from 'react';

import { debounce } from 'lodash';
import { Input, styles } from '../input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function LazyInput(props: Props): JSX.Element {
  const [focused, setFocused] = React.useState(false);

  const { value, onChange, ...rest } = props;

  function handleBlur() {
    setFocused(false);
  }

  function handleFocus() {
    setFocused(true);
  }

  const handleChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    return onChange(event);
  }, 1000);

  return focused
    ? <Input {...rest} defaultValue={value} onBlur={handleBlur} onChange={handleChange} autoFocus />
    : <span className={styles} onClick={handleFocus}>{value}</span>;
}
