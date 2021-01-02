import React from 'react';

import { sample } from 'lodash';
import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector } from '@lib/projects/selectors';
import { updateElement } from '@lib/projects/actions';
import { Label } from '@components/label';
import { ColorPicker } from '@components/trays/color-picker';
import { Button } from '@components/button';
import { colors } from '@components/trays/data/colors';

const styles = css`
  button {
    margin-bottom: 1.5rem;
    width: 100%;
  }
`;

export const Background = (): JSX.Element => {
  const dispatch = useDispatch();

  const { elements } = useSelector(projectSelector);
  const element = elements.find(element => element.id === '__background__');
  const { fill } = element.props;

  const handleChange = (value: string) => {
    const update = { fill: value };
    dispatch(updateElement(element.id, { props: update }));
  };

  const handleRandom = () => {
    const fill = sample(colors);
    handleChange(fill.hex);
  };

  return (
    <div className={styles}>
      <Button className='secondary' onClick={handleRandom}>
        Random
        <i className='ri-shuffle-line' />
      </Button>

      <Label>Background Color</Label>
      <ColorPicker selected={fill} handleChange={handleChange} />
    </div>
  );
};
