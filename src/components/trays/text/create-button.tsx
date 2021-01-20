import React from 'react';

import { useDispatch } from 'react-redux';
import { Button } from '@components/button';
import { createElement } from '@store/project';

export const CreateButton = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const text = {
      element: 'text',
      type: 'text',
      transform: {
        x: 50,
        y: 50,
        r: 0,
        s: [1, 1] as [number, number]
      },
      props: {
        dominantBaseline: 'text-before-edge',
        fill: '#283037',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 1,
        textAnchor: 'start',
        textDecoration: 'none'
      },
      text: 'Enter your text'
    };

    dispatch(createElement(text));
  };

  return (
    <Button onClick={handleClick}>
      Add Text
      <i className='ri-add-line' />
    </Button>
  );
};
