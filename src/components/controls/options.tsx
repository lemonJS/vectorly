import React from 'react';

import { css } from '@emotion/css';
import { OptionsButton } from '@components/controls/options-button';
import { OptionsLinks } from '@components/controls/options-links';

interface Props {}

interface State {
  open: boolean;
}

const styles = css`
  align-items: center;
  display: flex;
  padding-right: 1.5rem;
  position: relative;
`;

export class Options extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { open: false };
  }

  public componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  public componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, true);
  }

  private handleOpen = () => {
    this.setState({ open: true });
  };

  private handleClick = (event: MouseEvent) => {
    const element = event.target as Element;

    if (!element.closest('.dropdown-button')) {
      this.setState({ open: false });
    }
  };

  public render(): JSX.Element {
    return (
      <div className={styles}>
        <OptionsButton handleClick={this.handleOpen} />

        {this.state.open && <OptionsLinks />}
      </div>
    );
  }
}
