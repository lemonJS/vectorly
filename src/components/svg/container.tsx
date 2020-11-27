import React from 'react';

interface Props extends React.SVGProps<SVGGElement> {}

export function Container(props: Props) {
  const ref = React.useRef(null);
  const [selected, setSelected] = React.useState(false);

  function handleClick(event: React.MouseEvent<SVGGElement>) {
    setSelected(!selected);
  }

  return (
    <g {...props} ref={ref} onClick={handleClick}>
      {props.children}
    </g>
  );
}
