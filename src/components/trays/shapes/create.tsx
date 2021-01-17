import React from 'react';

import { css } from '@emotion/css';
import { shapes } from '@components/trays/data/shapes';
import { Input } from '@components/input';
import { Shape } from '@components/trays/shapes/shape';

const styles = css` 
  padding: 1.5rem;
  width: 100%;
  
  .shapes {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    padding-top: 1.5rem;
  }
`;

export const Create = (): JSX.Element => {
  const [search, setSearch] = React.useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    setSearch(element.value);
  };

  const results = shapes.filter(shape => search
    ? shape.keywords.some(keyword => keyword.includes(search))
    : true
  );

  return (
    <div className={styles}>
      <Input className='search' placeholder='Search...' value={search} onChange={handleSearch} />

      <div className='shapes'>
        {results.map(shape => (
          <Shape key={shape.shapeId} shape={shape} />
        ))}
      </div>
    </div>
  );
};
