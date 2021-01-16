import React from 'react';

import { css } from '@emotion/css';
import { Label } from '@components/label';
import { Scale } from '@components/scale';
import { Element, ElementProps } from '@type/project';
import { ButtonGroup } from '@components/trays/button-group';
import { Button } from '@components/button';
import { Grid, Col, Row } from '@components/grid';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  .toggle {
    background: none;
    border: none;
    color: var(--primary-accent-color);
    cursor: pointer;
    padding: .5rem 1.5rem 0 1.5rem;
    text-decoration: underline;
  }
  
  .label {
    margin: 0 0 .5rem 0;
    padding: 0 .5rem;
  }
  
  .button-group {
    margin: 0;
  }
  
  .grid {
    padding: 0 1rem;
  }
  
  .row {
    margin-top: 1rem;
  }
`;

export const StyleAdvanced = (props: Props): JSX.Element => {
  const { letterSpacing, fontStyle, textDecoration } = props.element.props;

  const [show, setShow] = React.useState(false);

  const toggleShow = () => setShow(!show);

  const handleItalic = () => {
    props.handleUpdate({ fontStyle: fontStyle === 'italic' ? 'normal' : 'italic' });
  };

  const handleLetterSpacing = (value: number) => {
    props.handleUpdate({ letterSpacing: value });
  };

  const handleDecoration = (type: string) => () => {
    const decoration = textDecoration
      .toString()
      .split(' ')
      .filter(d => d !== 'none');

    const list = decoration.includes(type)
      ? decoration.filter(d => d !== type)
      : [...decoration, type];

    if (list.length === 0) {
      list.push('none');
    }

    props.handleUpdate({ textDecoration: list.join(' ') });
  };

  return (
    <div className={styles}>
      {show && (
        <Grid className='grid'>
          <Row className='row'>
            <Col>
              <Label className='label'>Line height</Label>
              <Scale max={0} min={0} value={0} suffix='px' handleChange={console.log} />
            </Col>
            <Col>
              <Label className='label'>Letter spacing</Label>
              <Scale max={20} min={1} value={Number(letterSpacing)} suffix='px' handleChange={handleLetterSpacing} />
            </Col>
          </Row>
          <Row className='row'>
            <Col>
              <Label className='label'>Text decoration</Label>
              <ButtonGroup>
                <Button onClick={handleDecoration('underline')} className={`${textDecoration.toString().includes('underline') ? 'selected' : ''} secondary`}>
                  <i className='ri-underline' />
                </Button>
                <Button onClick={handleDecoration('line-through')} className={`${textDecoration.toString().includes('line-through') ? 'selected' : '' } secondary`}>
                  <i className='ri-strikethrough' />
                </Button>
                <Button onClick={handleItalic} className={`${fontStyle === 'italic' ? 'selected' : '' } secondary`}>
                  <i className='ri-italic' />
                </Button>
              </ButtonGroup>
            </Col>
            <Col />
          </Row>
        </Grid>
      )}

      <button className='toggle' onClick={toggleShow}>
        {show
          ? 'Hide advanced options'
          : 'Advanced options'
        }
      </button>
    </div>
  );
};
