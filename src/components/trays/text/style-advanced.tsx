import React from 'react';

import { css } from '@emotion/css';
import { Label } from '@components/label';
import { Scale } from '@components/scale';
import { Element, ElementProps } from '@type/project';
import { ButtonGroup } from '@components/trays/button-group';
import { Button } from '@components/button';

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
  
  .styles {
    padding: 1rem;
    
    .row {
      display: flex;
      
      .column {
        flex: 1;
      }
      
      &.single {
        flex-direction: column;
        margin-top: 1rem;
      }
    }
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
        <div className='styles'>
          <div className='row'>
            <div className='column'>
              <Label className='label'>Line height</Label>
              <Scale max={0} min={0} value={0} suffix='px' handleChange={console.log} />
            </div>

            <div className='column'>
              <Label className='label'>Letter spacing</Label>
              <Scale max={1} min={20} value={Number(letterSpacing)} suffix='px' handleChange={handleLetterSpacing} />
            </div>
          </div>

          <div className='row single'>
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
          </div>
        </div>
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
