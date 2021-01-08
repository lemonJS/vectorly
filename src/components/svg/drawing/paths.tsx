import React from 'react';

interface Props {
  active: boolean;
  handleCreate: (path: string) => void;
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
      this.setState({ pressed: false, coords: [] });
      this.props.handleCreate(this.path);
    }
  };

  private handleMouseDown = (_event: MouseEvent) => {
    this.setState({ pressed: true });
  };

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed && this.props.active) {
      const { x, y } = window.canvas.getBoundingClientRect();
      const coords = [event.clientX - x, event.clientY - y];
      this.setState(state => ({ coords: [...state.coords, coords] }));
    }
  };

  private get path() {
    if (this.state.coords.length === 0) {
      return '';
    }

    const x = this.state.coords
      .map(c => `${c.join(' ')} L `)
      .join('')
      .replace(/\sL\s$/, '');

    return `M ${x}`;
  }

  public render(): JSX.Element {
    return (
      <path d={this.path} stroke='red' fill='transparent' strokeWidth={5} />
    );
  }
}
