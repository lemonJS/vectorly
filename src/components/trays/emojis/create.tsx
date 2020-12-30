import React from 'react';

import emojis from 'emojilib';
import { css } from '@emotion/css';
import { Button } from '@components/button';
import { Input } from '@components/input';
import { Label } from '@components/label';
import { Emoji } from '@components/trays/emojis/emoji';

const styles = css`
  .emojis {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    width: 100%;
  }
  
  label {
    margin: 1.5rem 0 1rem 0;
  }
  
  button {
    width: 100%;
  }
  
  .paginate {
    padding: 1.5rem 0;
  }
`;

export const Create = (): JSX.Element => {
  const perPage = 99;
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');

  const handlePaginate = () => setPage(page + 1);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    setSearch(element.value);
  };

  const popular = emojis
    .ordered
    .slice(0, 27)
    .map(e => emojis.lib[e]);

  const all = Object
    .values(emojis.lib)
    .filter(emoji => {
      return search
        ? emoji.keywords.some(k => k.includes(search.toLowerCase()))
        : true;
    });

  return (
    <div className={styles}>
      <Input className='search' value={search} onChange={handleSearch} placeholder='Search...' />

      {!search && (
        <>
          <Label>Popular</Label>

          <div className='emojis'>
            {popular.map(emoji => <Emoji key={emoji.char} emoji={emoji} />)}
          </div>
        </>
      )}

      <Label>{search ? 'Results' : 'All'}</Label>

      <div className='emojis'>
        {all.slice(0, page * perPage).map(emoji => <Emoji key={emoji.char} emoji={emoji} />)}
      </div>

      {page * perPage < all.length && (
        <div className='paginate'>
          <Button onClick={handlePaginate}>Load more</Button>
        </div>
      )}
    </div>
  );
};
