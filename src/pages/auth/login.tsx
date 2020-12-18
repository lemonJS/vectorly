import React from 'react';

import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { api } from '@lib/api';
import { setUser } from '@lib/user/actions';
import { AuthFormData } from '@type/auth';
import { Container } from '@components/common/container';
import { AuthForm } from '@components/auth/auth-form';
import { Label } from '@components/common/label';
import { Input } from '@components/common/input';
import { Button } from '@components/common/button';
import { useRouter } from 'next/router';

const styles = css`
  h2 {
    margin: 3rem 0;
    text-align: center;
  }
  
  .hint {
    font-size: 14px;
    margin: 1.5rem 0;
    text-align: center;
    
    a {
      color: var(--primary-accent-color);
      text-decoration: none;
    }
  }
`;

export default function Login(): JSX.Element {
  const error = null;
  const dispatch = useDispatch();
  const router = useRouter();

  async function handleSubmit(input: AuthFormData) {
    try {
      const user = await api.post('/auth/login', input);
      dispatch(setUser(user));
      await router.push('/');
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <div className={styles}>
        <h2>Log in</h2>
        <AuthForm handleSubmit={handleSubmit} error={error}>
          <Label htmlFor='email'>Email</Label>
          <Input name='email' id='email' type='email' required />

          <Label htmlFor='password'>Password</Label>
          <Input name='password' id='password' type='password' required />

          <Button>Log in</Button>
        </AuthForm>
        <p className='hint'>Don't have an account? <Link href='/auth/signup'><a>Sign up</a></Link></p>
      </div>
    </Container>
  );
}
