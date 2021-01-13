import { Position } from '@lib/editor/reducers';

interface PositionPayload {
  client: [number, number];
  delta: number;
  factor: number;
  position: Position;
}

export const calculatePosition = (payload: PositionPayload): Position => {
  let scale = payload.position.s;

  const [clientX, clientY] = payload.client;

  const delta = payload.delta;
  const { x, y, width, height } = window.canvas.getBoundingClientRect();

  const zoomPointX = clientX - x;
  const zoomPointY = clientY - y;

  const zoomTargetX = (zoomPointX - payload.position.x) / payload.position.s;
  const zoomTargetY = (zoomPointY - payload.position.y) / payload.position.s;

  scale += delta * payload.factor * scale;

  const positionX = -zoomTargetX * scale + zoomPointX;
  const positionY = -zoomTargetY * scale + zoomPointY;

  const position = {
    s: scale,
    x: positionX,
    y: positionY
  };

  if (position.x > 0) {
    position.x = 0;
  }

  if (position.x + width * scale < width ) {
    position.x = -width * (scale - 1);
  }

  if (position.y > 0) {
    position.y = 0;
  }

  if (position.y + height * scale < height) {
    position.y = -height * (scale - 1)
  }

  return position;
};
