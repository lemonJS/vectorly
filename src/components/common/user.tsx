import React from 'react';

import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import { UserLinks } from '@components/common/user-links';
import { userSelector } from '@lib/user/selectors';

const styles = css`
  align-items: center;
  display: flex;
  padding-right: 1.5rem;
  position: relative;
  
  button {
    align-items: center;
    background: none;
    border: 2px solid transparent;
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
    
    &:hover {
      border-color: var(--primary-accent-color);
    }
  }
`;

export function User(): JSX.Element {
  const user = useSelector(userSelector);
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
        <span>{user ? `${user.firstName} ${user.lastName}` : 'Guest'}</span>
        <i className='ri-arrow-down-s-line' />
      </button>

      {open && <UserLinks user={user} />}
    </div>
  );
}
