import React from 'react';

import { createPortal } from 'react-dom';
import { ModalBody } from './modal-body';

interface State {
  open: boolean;
}

interface Props {
  children: React.ReactNode;
}

export class Modal extends React.Component<Props, State> {
  private element: HTMLDivElement;

  public constructor(props: Props) {
    super(props);

    this.state = { open: false };
  }

  private static get root() {
    let container = document.getElementById('modal-container');

    if (!container) {
      container = document.createElement('div');
      container.id = 'modal-container';
      document.body.appendChild(container);
    }

    return container;
  }

  public componentDidMount() {
    this.element = document.createElement('div');
    Modal.root.appendChild(this.element);
  }

  public componentWillUnmount() {
    Modal.root.removeChild(this.element);
  }

  public open = () => this.setState({ open: true });

  public close = () => this.setState({ open: false });

  public render() {
    const body = <ModalBody handleClose={this.close} children={this.props.children} />

    return this.element && this.state.open
      ? createPortal(body, this.element)
      : null;
  }
}
