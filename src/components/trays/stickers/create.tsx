import React from 'react';

import { css } from '@emotion/css';
import { stickers } from '@components/trays/data/stickers';
import { Input } from '@components/input';
import { Sticker } from '@components/trays/stickers/sticker';

const styles = css` 
  padding: 1.5rem;
  width: 100%;
  
  .stickers {
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

  const results = stickers.filter(sticker => search
    ? sticker.keywords.some(keyword => keyword.includes(search))
    : true
  );

  return (
    <div className={styles}>
      <Input className='search' placeholder='Search...' value={search} onChange={handleSearch} />

      <div className='stickers'>
        {results.map(sticker => (
          <Sticker key={sticker.stickerId} sticker={sticker} />
        ))}
      </div>
    </div>
  );
};
