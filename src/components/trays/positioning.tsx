import React from 'react';

import { css } from '@emotion/css';
import { Element } from '@type/project';
import { Label } from '@components/trays/label';
import { Input } from '@components/trays/input';
import { Grid, Row, Col } from '@components/grid';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<Element>) => void;
}

const styles = css`
  .grid {
    padding: 0 1rem;
    width: 260px;
  }
`;

export const Positioning = (props: Props): JSX.Element => {
  const { id, transform } = props.element;
  const element = document.getElementById(id);
  const bounds = element.getBoundingClientRect();

  const handleTransform = (property: string) => (value: string) => {
    const update = { ...transform, [property]: Number(value) }
    props.handleUpdate({ transform: update });
  };

  const handleRotate = (value: string) => {
    const update = { ...transform, r: Number(value) };
    props.handleUpdate({ transform: update });
  };

  return (
    <div className={styles}>
      <Label>Size &amp; position</Label>

      <Grid className='grid'>
        <Row>
          <Col>
            <Input icon='X' value={Math.ceil(transform.x)} handleChange={handleTransform('x')} />
          </Col>
          <Col>
            <Input icon='Y' value={Math.ceil(transform.y)} handleChange={handleTransform('y')} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input icon='W' value={Math.ceil(bounds.width)} handleChange={console.log} />
          </Col>
          <Col>
            <Input icon='H' value={Math.ceil(bounds.height)} handleChange={console.log} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input icon={<i className='ri-clockwise-line' />} value={transform.r} handleChange={handleRotate} />
          </Col>
          <Col />
        </Row>
      </Grid>
    </div>
  );
};
