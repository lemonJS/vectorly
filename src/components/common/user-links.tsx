import React from 'react';

import { css } from '@emotion/css';
import { User } from '@type/user';
import { UserLink } from '@components/common/user-link';

interface Props {
  user?: User;
}

const styles = css`
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
`;

const userLinks = [
  {
    link: '/account',
    name: 'Account',
    icon: 'ri-settings-4-line'
  },
  {
    link: '/account/projects',
    name: 'Projects',
    icon: 'ri-draft-line'
  },
  {
    link: '/#',
    name: 'Sign out',
    icon: 'ri-logout-circle-line',
  }
];

const guestLinks = [
  {
    link: '/auth/signup',
    name: 'Sign up',
    icon: 'ri-user-add-line'
  },
  {
    link: '/auth/login',
    name: 'Log in',
    icon: 'ri-user-shared-line'
  }
];

export function UserLinks(props: Props): JSX.Element {
  const links = props.user ? userLinks : guestLinks;

  return (
    <div className={styles}>
      <ul>
        {links.map(link => <UserLink {...link} key={link.name} />)}
      </ul>
    </div>
  )
}
