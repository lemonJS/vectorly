import React from 'react';

import { css } from '@emotion/css';

interface Props {
  children: React.ReactNode;
}

interface State {
  open: boolean;
}

const styles = css`
  background: var(--foreground);
  border-radius: var(--border-radius-md);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, .1);
  padding: 1.5rem;
  position: absolute;
  z-index: 1;
`;

export class Dropdown extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = { open: false };
  }

  public open = (): void => {
    this.setState({ open: true });
  };

  public close = (): void => {
    this.setState({ open: false });
  };

  public toggle = (): void => {
    this.state.open
      ? this.close()
      : this.open();
  };

  public render(): JSX.Element | null {
    if (!this.state.open) return null;

    return (
      <div id='dropdown' className={`dropdown ${styles}`}>
        {this.props.children}
      </div>
    );
  }
}
