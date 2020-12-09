import React from 'react';

import { css } from '@emotion/css';
import { Element } from '@type/project';
import { Label } from '@components/common/label';
import { Button } from '@components/common/button';
import { Scale } from '@components/common/scale';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<React.SVGProps<SVGElement>>) => void;
}

const styles = css`
  label {
    margin-top: 2rem;
  }
  
  .styles {
    display: flex;
    justify-content: space-between;
    
    button {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      width: 42px;
      
      i {
        margin: 0;
      }
      
      &.selected {
        background: var(--secondary-button-border-color);
        border-color: var(--secondary-button-border-color);
        color: var(--secondary-button-background-color);
      }
    }
  } 
`;

export function Style(props: Props): JSX.Element {
  const { fontWeight, fontStyle, textDecoration, letterSpacing } = props.element.props;

  function handleBold() {
    props.handleUpdate({ fontWeight: fontWeight === 'bold' ? 'normal' : 'bold' });
  }

  function handleItalic() {
    props.handleUpdate({ fontStyle: fontStyle === 'italic' ? 'normal' : 'italic' });
  }

  function handleDecoration(type: string) {
    return function() {
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
    }
  }

  function handleLetterSpacing(value: number) {
    props.handleUpdate({ letterSpacing: value });
  }

  return (
    <div className={styles}>
      <Label>Font Style</Label>

      <div className='styles'>
        <Button onClick={handleBold} className={`${fontWeight === 'bold' ? 'selected' : '' } secondary`}>
          <i className='ri-bold' />
        </Button>
        <Button onClick={handleItalic} className={`${fontStyle === 'italic' ? 'selected' : '' } secondary`}>
          <i className='ri-italic' />
        </Button>
        <Button onClick={handleDecoration('underline')} className={`${textDecoration.toString().includes('underline') ? 'selected' : '' } secondary`}>
          <i className='ri-underline' />
        </Button>
        <Button onClick={handleDecoration('line-through')} className={`${textDecoration.toString().includes('line-through') ? 'selected' : '' } secondary`}>
          <i className='ri-strikethrough' />
        </Button>
      </div>

      <Label>Letter Spacing</Label>
      <Scale max={10} min={-10} value={Number(letterSpacing ?? 1)} handleChange={handleLetterSpacing} />
    </div>
  );
}
