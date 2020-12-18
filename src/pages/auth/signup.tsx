import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';
import { AuthFormData } from '@type/auth';
import { Container } from '@components/common/container';
import { AuthForm } from '@components/auth/auth-form';
import { Label } from '@components/common/label';
import { Input } from '@components/common/input';
import { Button } from '@components/common/button';

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

export default function Signup(): JSX.Element {
  const error = null;

  async function handleSubmit(input: AuthFormData) {
    try {
      console.log(input);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <div className={styles}>
        <h2>Sign up</h2>
        <AuthForm handleSubmit={handleSubmit} error={error}>
          <Label htmlFor='firstName'>First name</Label>
          <Input name='firstName' id='firstName' type='string' required />

          <Label htmlFor='lastName'>Last name</Label>
          <Input name='lastName' id='lastName' type='string' required />

          <Label htmlFor='email'>Email</Label>
          <Input name='email' id='email' type='email' required />

          <Label htmlFor='password'>Password</Label>
          <Input name='password' id='password' type='password' required />

          <Button>Sign up</Button>
        </AuthForm>
        <p className='hint'>Already have an account? <Link href='/auth/login'><a>Log in</a></Link></p>
      </div>
    </Container>
  );
}
