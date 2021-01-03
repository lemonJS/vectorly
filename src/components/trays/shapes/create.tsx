import React from 'react';

import { css } from '@emotion/css';
import { shapes } from '@components/trays/data/shapes';
import { clipart } from '@components/trays/data/clipart';
import { Input } from '@components/input';
import { Shape } from '@components/trays/shapes/shape';
import { Clipart } from '@components/trays/shapes/clipart';
import { Label } from '@components/label';

const styles = css` 
  width: 100%;
  
  label {
    margin-top: 1.5rem;
  }
  
  .shapes {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  }
`;

export const Create = (): JSX.Element => {
  const [search, setSearch] = React.useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    setSearch(element.value);
  };

  const shapeResults = shapes.filter(shape => search
    ? shape.keywords.some(keyword => keyword.includes(search))
    : true
  );

  const clipartResults = clipart.filter(clip => search
    ? clip.keywords.some(keyword => keyword.includes(search))
    : true
  );

  return (
    <div className={styles}>
      <Input className='search' placeholder='Search...' value={search} onChange={handleSearch} />

      {shapeResults.length > 0 && (
        <Label>Outlines</Label>
      )}

      <div className='shapes'>
        {shapeResults.map(shape => (
          <Shape key={shape.shapeId} shape={shape} />
        ))}
      </div>

      {clipartResults.length > 0 && (
        <Label>Clipart</Label>
      )}

      <div className='shapes'>
        {clipartResults.map(clip => (
          <Clipart key={clip.clipArtId} clipart={clip} />
        ))}
      </div>
    </div>
  );
};
