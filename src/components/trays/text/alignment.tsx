import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from "@type/project";
import { Button } from '@components/button';
import { Label } from '@components/trays/label';
import { ButtonGroup } from '@components/trays/button-group';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
`;

export const Alignment = (props: Props): JSX.Element => {
  const { textAnchor } = props.element.props;

  const handleTextAnchor = (direction: string) => () => {
    props.handleUpdate({ textAnchor: direction });
  };

  return (
    <div className={styles}>
      <Label>Text Alignment</Label>

      <ButtonGroup>
        <Button className={`${textAnchor === 'start' ? 'selected' : '' } secondary`} onClick={handleTextAnchor('start')}>
          <i className='ri-align-left' />
        </Button>
        <Button className={`${textAnchor === 'middle' ? 'selected' : '' } secondary`} onClick={handleTextAnchor('middle')}>
          <i className='ri-align-center' />
        </Button>
        <Button className={`${textAnchor === 'end' ? 'selected' : '' } secondary`} onClick={handleTextAnchor('end')}>
          <i className='ri-align-right' />
        </Button>
      </ButtonGroup>
    </div>
  );
};
