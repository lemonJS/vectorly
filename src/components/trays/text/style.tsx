import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { fonts, weights } from '@components/trays/data/fonts';
import { Label } from '@components/label';
import { Select } from '@components/trays/select';
import { Scale } from '@components/scale';
import { StyleAdvanced } from '@components/trays/text/style-advanced';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  .heading {
    padding: 0 1.5rem;
  }
  
  .row {
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: repeat(auto-fill, 124px);
    padding: 0 1rem;
  }
  
  .select,
  .scale {
    flex: 1;
  }
`;

export const Style = (props: Props): JSX.Element => {
  const { fontFamily, fontSize, fontWeight } = props.element.props;

  const handleFontSize = (value: number) => {
    props.handleUpdate({ fontSize: value });
  };

  const handleFontFamily = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    props.handleUpdate({ fontFamily: element.value });
  };

  const handleFontWeight = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    console.log(element);
    // TODO
  };

  return (
    <div className={styles}>
      <Label className='heading'>Text style</Label>

      <div className='row'>
        <Select className='select' value={fontFamily} onChange={handleFontFamily}>
          {fonts.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </Select>
      </div>

      <div className='row'>
        <Select className='select' value={fontWeight} onChange={handleFontWeight}>
          {weights.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </Select>

        <Scale
          max={100}
          min={12}
          value={Number(fontSize)}
          suffix='px'
          handleChange={handleFontSize}
        />
      </div>

      <StyleAdvanced />
    </div>
  );
};
