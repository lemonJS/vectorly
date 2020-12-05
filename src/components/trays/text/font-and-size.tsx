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
        max={40}
        min={12}
        value={Number(fontSize)}
        handleChange={handleFontSize}
      />
    </div>
  );
}
