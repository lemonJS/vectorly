import React from 'react';

import { css } from '@emotion/css';
import { Label } from '@components/label';
import { Element, ElementProps } from '@type/project';
import { Filter } from '@components/trays/photos/filters/filter';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  padding: 0 1.5rem;
  
  .filters {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    margin-bottom: 2rem;
  }
`;

export const Filters = (props: Props): JSX.Element => {
  const { filter } = props.element.props;

  const key = (filter || '')
    .replace('url(#', '')
    .replace(')', '') || null;

  const filters = [
    null,
    'brannan',
    'earlybird',
    'inkwell',
    'lofi',
    'ludwig',
    'mayfair',
    'nashville'
  ];

  const handleClick = (filter: string) => {
    props.handleUpdate({ filter: filter ? `url(#${filter})` : null });
  };

  return (
    <div className={styles}>
      <Label>Filters</Label>
      <div className='filters'>
        {filters.map(filter => (
          <Filter
            key={filter}
            href={props.element.props.href}
            filter={filter}
            selected={key === filter}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};
