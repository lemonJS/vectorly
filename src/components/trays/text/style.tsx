import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { fonts, weights } from '@components/trays/data/fonts';
import { Label } from '@components/trays/label';
import { Select } from '@components/trays/select';
import { Scale } from '@components/scale';
import { Grid, Col, Row } from '@components/grid';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  .grid {
    padding: 0 1rem;
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
    props.handleUpdate({ fontWeight: element.value });
  };

  return (
    <div className={styles}>
      <Label>Text style</Label>

      <Grid className='grid'>
        <Row>
          <Select className='select' value={fontFamily} onChange={handleFontFamily}>
            {fonts.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </Select>
        </Row>
        <Row>
          <Col>
            <Select className='select' value={fontWeight} onChange={handleFontWeight}>
              {weights.map(font => (
                <option key={font} value={font.toLowerCase()}>{font}</option>
              ))}
            </Select>
          </Col>
          <Col>
            <Scale
              max={100}
              min={12}
              value={Number(fontSize)}
              suffix='px'
              handleChange={handleFontSize}
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
