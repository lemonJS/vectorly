import React from 'react';

import type { Element } from '../../../types/project';
import { css } from '@emotion/css';
import { fonts } from '../data/fonts';
import { Label } from '../../label';
import { Select } from '../../select';
import { Scale } from '../../scale';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<React.SVGProps<SVGElement>>) => void;
}

const styles = css`
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
    const font = fonts.find(f => f.value === element.value);
    props.handleUpdate({ fontFamily: font.name });
  }

  return (
    <div className={styles}>
      <Label>Font &amp; Size</Label>

      <Select className='select' value={fontFamily} onChange={handleFontFamily}>
        {fonts.map(font => (
          <option key={font.value} value={font.value}>{font.name}</option>
        ))}
      </Select>

      <Scale
        max={40}
        min={12}
        value={Number(fontSize)}
        handleChange={handleFontSize}
      />
    </div>
  );
}