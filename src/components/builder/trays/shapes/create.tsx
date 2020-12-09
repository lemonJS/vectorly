import React from 'react';

import { css } from '@emotion/css';
import { shapes } from '../data/shapes';
import { Input } from '../../../common/input';
import { Shape } from './shape';

const styles = css` 
  .shapes {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    padding-top: 1.5rem;
  }
`;

export function Create(): JSX.Element {
  const [search, setSearch] = React.useState('');

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const element = event.target as HTMLInputElement;
    setSearch(element.value);
  }

  const results = shapes.filter(shape => {
    return search
      ? shape.keywords.some(keyword => keyword.includes(search))
      : true;
  });

  return (
    <div className={styles}>
      <Input placeholder='Search...' value={search} onChange={handleSearch} />

      <div className='shapes'>
        {results.map(shape => (
          <Shape key={shape.id} shape={shape} />
        ))}
      </div>
    </div>
  );
}
