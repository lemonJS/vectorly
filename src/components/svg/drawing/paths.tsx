import React from 'react';

import { throttle } from 'lodash';
import { Transform } from '@type/project';

interface Props {
  active: boolean;
  handleCreate: (path: string, transform: Transform) => void;
}

interface State {
  coords: number[][];
  pressed: boolean;
}

export class Paths extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      coords: [],
      pressed: false
    };
  }

  public componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousedown', this.handleMouseDown);
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  public componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousedown', this.handleMouseDown, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);
  }

  private handleMouseUp = (_event: MouseEvent) => {
    if (this.state.pressed && this.path) {
      const { path, transform } = this.getCreationParams;
      this.props.handleCreate(path, transform);
    }

    this.setState({ pressed: false, coords: [] });
  };

  private handleMouseDown = (event: MouseEvent) => {
    const element = event.target as HTMLElement;

    if (element.closest('#canvas')) {
      this.setState({ pressed: true });
    }
  };

  private handleMouseMove = throttle((event: MouseEvent) => {
    if (this.state.pressed && this.props.active) {
      const { x, y } = window.canvas.getBoundingClientRect();
      const coords = [event.clientX - x, event.clientY - y];

      this.setState(state => ({ coords: [...state.coords, coords] }));
    }
  }, 10);

  private convertCoordsToPath = (coords: number[][]) => {
    const x = coords
      .map(c => `${c.join(' ')} L `)
      .join('')
      .replace(/\sL\s$/, '');

    return `M ${x}`;
  }

  private get path() {
    if (this.state.coords.length === 0) {
      return '';
    }

    return this.convertCoordsToPath(this.state.coords);
  }

  private get getCreationParams() {
    // Get a list of all the x and y coords
    const xCoords = this.state.coords.map(c => Number(c[0]));
    const yCoords = this.state.coords.map(c => Number(c[1]));

    // Find the smallest of all of them
    const xOffset = Math.min(...xCoords);
    const yOffset = Math.min(...yCoords);

    // Reset them so the path effectively starts at 0, 0
    const coords = this.state.coords.map(c => [c[0] - xOffset, c[1] - yOffset]);

    // Get the path from the coords
    const path = this.convertCoordsToPath(coords);

    // Use the offset to transform the path. This way it will
    // appear in the exact position, but will not totally shaft
    // the selection box
    const transform = {
      x: xOffset,
      y: yOffset,
      r: 0,
      s: [1, 1] as [number, number]
    };

    return { path, transform };
  }

  public render(): JSX.Element {
    return (
      <path
        d={this.path}
        fill='transparent'
        stroke='var(--primary)'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={5}
      />
    );
  }
}
