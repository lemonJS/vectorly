import React from 'react';

import { sample } from 'lodash';
import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector } from '@lib/projects/selectors';
import { updateElement, updateProject } from '@lib/projects/actions';
import { Label } from '@components/label';
import { ColorPicker } from '@components/trays/color-picker';
import { Button } from '@components/button';
import { colors } from '@components/trays/data/colors';
import { Presets } from '@components/trays/canvas/presets';
import { Size } from '@components/trays/canvas/size';

const styles = css`
  label {
    margin-top: 1.5rem;  
  }
  
  button {
    width: 100%;
  }
`;

export const Canvas = (): JSX.Element => {
  const dispatch = useDispatch();

  const { elements, size } = useSelector(projectSelector);
  const element = elements.find(element => element.id === '__background__');
  const [width, height] = size;

  const handleChange = (value: string) => {
    const update = { fill: value };
    dispatch(updateElement(element.id, { props: update }));
  };

  const handleSize = (width: number, height: number) => {
    const size = [width, height] as [number, number];
    dispatch(updateProject({ size }));
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

      <Presets height={height} width={width} handleChange={handleSize} />

      <Size height={height} width={width} handleChange={handleSize} />

      <Label>Background Color</Label>
      <ColorPicker selected={element.props.fill} handleChange={handleChange} />
    </div>
  );
};
