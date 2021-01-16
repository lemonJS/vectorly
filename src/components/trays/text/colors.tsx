import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { ColorPicker } from '@components/trays/color-picker';
import { Label } from '@components/trays/label';
import { Input } from '@components/trays/input';
// import { Opacity } from '@components/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  label {
    align-items: center;
    display: flex;  
    justify-content: space-between;
    
    input {
      width: 50px;
    }
  }
  
  .picker {
    padding: 0 1.5rem;
  }
`;

export const Colors = (props: Props): JSX.Element => {
  const { fill } = props.element.props;

  const handleColor = (hex: string) => {
    props.handleUpdate({ fill: hex });
  };

  // const handleOpacity = (value: number) => {
  //   props.handleUpdate({ opacity: value });
  // };

  return (
    <div className={styles}>
      <Label>
        <span>Fill</span>
        <Input value={100} icon={<i className='ri-contrast-drop-line' />} handleChange={console.log} />
      </Label>
      <div className='picker'>
        <ColorPicker selected={fill} handleChange={handleColor} />
        {/*<Opacity selected={opacity} handleUpdate={handleOpacity} />*/}
      </div>
    </div>
  );
};
