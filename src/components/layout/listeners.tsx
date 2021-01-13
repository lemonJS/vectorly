import React from 'react';

import { connect } from 'react-redux';
import { State } from '@type/redux';
import { Position } from '@lib/editor/reducers';
import { setSelectionId, setPosition } from '@lib/editor/actions';
import { calculatePosition } from '@lib/positioning';

interface Props {
  children: React.ReactNode;
  position: Position;
  handlePosition: (position: Partial<Position>) => void;
  handleElementDismiss: VoidFunction;
}

export class GlobalListeners extends React.Component<Props> {
  private readonly factor = 0.05;

  public constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    document.addEventListener('wheel', this.handleWheel, { passive: false });
    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('mousedown', this.handleMouseDown);
  }

  public componentWillUnmount() {
    document.removeEventListener('wheel', this.handleWheel, false);
    document.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('keydown', this.handleKeyDown, false);
    document.removeEventListener('mousedown', this.handleMouseDown, false);
  }

  private handleWheel = (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();

      const position = calculatePosition({
        client: [event.clientX, event.clientY],
        delta: event.deltaY * -this.factor,
        factor: this.factor,
        position: this.props.position
      });

      this.props.handlePosition(position);
    }
  };

  private handleKeyUp = (_event: KeyboardEvent) => {
    this.setState({ command: false });
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    const keys = ['Meta', 'Left WinKey'];
    this.setState({ command: keys.includes(event.key) });
  };

  private handleMouseDown = (event: MouseEvent) => {
    const element = event.target as Element;

    if (element.id === window.canvas.id) {
      this.props.handleElementDismiss();
    }
  };

  public render(): JSX.Element {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => ({
  position: state.editor.position
});

const mapDispatchToProps = (dispatch: any) => ({
  handlePosition: (position: Partial<Position>) => dispatch(setPosition(position)),
  handleElementDismiss: () => dispatch(setSelectionId(null))
});

export const Listeners = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalListeners)
