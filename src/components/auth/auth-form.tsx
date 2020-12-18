import React from 'react';

import { css } from '@emotion/css';
import { AuthFormData } from '@type/auth';
import { ErrorMessage } from '@components/common/error-message';

interface Props {
  children: React.ReactNode;
  error?: Error;
  handleSubmit: (variables: AuthFormData) => void;
}

const styles = css`
  background: var(--foreground-color);
  border-radius: .25rem;
  margin: 0 auto;
  max-width: 400px;
  padding: 1.5rem;
  
  label {
    color: var(--primary-font-color);
  }
  
  input {
    color: var(--primary-font-color);
    margin-bottom: 1.5rem;
  }
  
  button {
    width: 100%;
  }
`;

export function AuthForm(props: Props): JSX.Element {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const element = event.target as HTMLFormElement;
    const form = new FormData(element);

    props.handleSubmit({
      firstName: form.get('firstName')?.toString(),
      lastName: form.get('lastName')?.toString(),
      email: form.get('email')?.toString(),
      password: form.get('password')?.toString()
    });
  }

  return (
    <div className={styles}>
      {props.error && (
        <ErrorMessage message={props.error.message} />
      )}

      <form onSubmit={handleSubmit}>
        {props.children}
      </form>
    </div>
  );
}
