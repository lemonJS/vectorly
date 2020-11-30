import React from 'react';

import emojis from 'emojilib';
import { css } from '@emotion/css';
import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';
import { Emoji } from './emoji';

import type { EmojiData } from '../../types/emoji';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1.5rem;
  width: 100%;
  
  .emojis {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
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

export function Emojis(): JSX.Element {
  const perPage = 99;
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');

  function handlePaginate() {
    setPage(page + 1);
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const element = event.target as HTMLInputElement;
    setSearch(element.value);
  }

  const popular = emojis
    .ordered
    .slice(0, 27)
    .map(e => emojis.lib[e]);

  const all = Object
    .values(emojis.lib as EmojiData[])
    .filter(emoji => {
      return search
        ? emoji.keywords.some(k => k.includes(search.toLowerCase()))
        : true;
    });

  return (
    <div className={styles}>
      <Input value={search} onChange={handleSearch} placeholder='Search...' />

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
}
