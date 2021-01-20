import React from 'react';

import { Element, Transform } from '@store/project';
import { Menu } from '@components/svg/selection/menu';

interface Props {
  height: number;
  padding: number;
  parent: string;
  transform: Transform;
  element: Element;
  handleTransform: (transform: Partial<Transform>) => void;
  width: number;
}

interface State {
  open: boolean;
}

export class Options extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = { open: false };
  }

  private get x() {
    return this.props.width + (24 / this.props.transform.s[0]);
  }

  private get y() {
    return this.props.height / 2;
  }

  private get rx() {
    return 12 / this.props.transform.s[0];
  }

  private get ry() {
    return 12 / this.props.transform.s[1];
  }

  private handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  public render(): JSX.Element {
    return (
      <g transform={`translate(${this.x} ${this.y})`}>
        <ellipse
          rx={this.rx}
          ry={this.ry}
          cursor='pointer'
          fill='var(--primary)'
          onClick={this.handleClick}
        />
        <path
          fill='white'
          transform={`scale(${1 / this.props.transform.s[0]} ${1 / this.props.transform.s[1]}) translate(-1.5 -7)`}
          d='M 1.555556,0 C 0.7,0 0,0.7 0,1.5555556 c 0,0.8555555 0.7,1.5555555 1.555556,1.5555555 0.855555,0 1.555555,-0.7 1.555555,-1.5555555 C 3.111111,0.7 2.411111,0 1.555556,0 Z m 0,10.888889 C 0.7,10.888889 0,11.588889 0,12.444444 0,13.3 0.7,14 1.555556,14 c 0.855555,0 1.555555,-0.7 1.555555,-1.555556 0,-0.855555 -0.7,-1.555555 -1.555555,-1.555555 z m 0,-5.4444446 C 0.7,5.4444444 0,6.1444444 0,7 c 0,0.855556 0.7,1.555556 1.555556,1.555556 0.855555,0 1.555555,-0.7 1.555555,-1.555556 0,-0.8555556 -0.7,-1.5555556 -1.555555,-1.5555556 z'
          pointerEvents='none'
        />

        {this.state.open && <Menu element={this.props.element} />}
      </g>
    );
  }
}
