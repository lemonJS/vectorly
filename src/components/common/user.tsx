import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';

const styles = css`
  align-items: center;
  display: flex;
  padding-right: 1.5rem;
  position: relative;
  
  button {
    align-items: center;
    background: none;
    border: none;
    border-radius: .25rem;
    color: var(--primary-text-color);
    cursor: pointer;
    display: flex;
    font: inherit;
    font-size: 14px;
    margin-left: 1rem;
    padding: .5rem;
    
    i {
      margin-left: .5rem;
    }
  }
  
  .dropdown {
    background: var(--foreground-color);
    border-radius: .25rem;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: 1.5rem;
    top: 3.5rem;
    width: 200px;
    z-index: 2;
    
    ul {
      margin: 0;
      padding: 0;
    }
    
    li {
      align-items: center;
      border-bottom: 1px solid var(--background-color);
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 1rem;
      
      &:last-of-type {
        margin-bottom: 0;
      }
      
      &:hover {
        background: var(--background-color);
      }
    }
    
    a {
      color: var(--primary-text-color);
      font-size: 14px;
      display: block;
      text-decoration: none;
    }
  }
`;

export function User(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClick(event: MouseEvent) {
    const element = event.target as Element;

    if (!element.closest('.dropdown-button')) {
      setOpen(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return (
    <div className={styles}>
      <button className={`dropdown-button ${styles}`} onClick={handleOpen}>
        <span>Guest</span>
        <i className='ri-arrow-down-s-line' />
      </button>
      {open && (
        <div className='dropdown'>
          <ul>
            <li>
              <Link href='/auth/signup'>
                <a>Sign up</a>
              </Link>
              <i className='ri-user-add-line' />
            </li>
            <li>
              <Link href='/auth/login'>
                <a>Log in</a>
              </Link>
              <i className='ri-user-shared-line' />
            </li>
            <li>
              <Link href='#'>
                <a>Projects</a>
              </Link>
              <i className='ri-draft-line' />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
