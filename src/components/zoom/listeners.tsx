import React from 'react';

import { clamp } from 'lodash';

interface Props {
  children: React.ReactNode;
  zoom: number;
  handleZoom: (zoom: number) => void;
}

export class Listeners extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    document.addEventListener('wheel', this.handleWheel, { passive: false });
    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  public componentWillUnmount() {
    document.removeEventListener('wheel', this.handleWheel, false);
    document.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  private handleWheel = (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();

      const scale = clamp(this.props.zoom + event.deltaY * -0.5, 10, 200);
      this.props.handleZoom(scale);
    }
  };

  private handleKeyUp = (_event: KeyboardEvent) => {
    this.setState({ command: false });
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    const keys = ['Meta', 'Left WinKey'];
    this.setState({ command: keys.includes(event.key) });
  };

  public render(): JSX.Element {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}
