import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { fonts } from '@components/trays/data/fonts';
import { Label } from '@components/label';
import { Select } from '@components/select';
import { Scale } from '@components/scale';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  label {
    margin-top: 2rem;
  }
  
  .select {
    margin-bottom: 1rem;
  }
`;

export const FontAndSize = (props: Props): JSX.Element => {
  const { fontFamily, fontSize } = props.element.props;

  const handleFontSize = (value: number) => {
    props.handleUpdate({ fontSize: value });
  };

  const handleFontFamily = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    props.handleUpdate({ fontFamily: element.value });
  };

  return (
    <div className={styles}>
      <Label>Font &amp; Size</Label>

      <Select className='select' value={fontFamily} onChange={handleFontFamily}>
        {fonts.map(font => (
          <option key={font} value={font}>{font}</option>
        ))}
      </Select>

      <Scale
        max={100}
        min={12}
        value={Number(fontSize)}
        handleChange={handleFontSize}
      />
    </div>
  );
};
