import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { fonts } from '@components/builder/trays/data/fonts';
import { Label } from '@components/common/label';
import { Select } from '@components/common/select';
import { Scale } from '@components/common/scale';

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

export function FontAndSize(props: Props): JSX.Element {
  const { fontFamily, fontSize } = props.element.props;

  function handleFontSize(value: number) {
    props.handleUpdate({ fontSize: value });
  }

  function handleFontFamily(event: React.ChangeEvent<HTMLSelectElement>) {
    const element = event.target as HTMLSelectElement;
    props.handleUpdate({ fontFamily: element.value });
  }

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
}
