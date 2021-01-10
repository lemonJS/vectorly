import React from 'react';

import { css } from '@emotion/css';

interface Props {

}

interface State {
  open: boolean;
}

const styles = css`
  background: var(--foreground-color);
  border-radius: .5rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, .1);
  padding: 1.5rem;
  position: absolute;
`;

export class Dropdown extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = { open: false };
  }

  public componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  public componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  public open = () => {
    this.setState({ open: true });
  };

  public close = () => {
    this.setState({ open: false });
  };

  public toggle = () => {
    this.state.open
      ? this.close()
      : this.open();
  };

  private handleClick = (event: MouseEvent) => {
    const element = event.target as Element;
    console.log(element);
  };

  public render(): JSX.Element {
    if (!this.state.open) return null;

    return (
      <div className={`${styles} dropdown`}>
        <p>Hello</p>
      </div>
    );
  }
}
