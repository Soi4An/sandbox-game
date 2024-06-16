import { moveDown, moveLeft, moveRight, moveUp } from './moves';

let xDown = null;
let yDown = null;

function getTouches(event) {
  // browser API || jQuery
  return event.touches || event.originalEvent.touches;
}

export function handleTouchStart(event) {
  const firstTouch = getTouches(event)[0];

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};

export function handleTouchMove(event) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = event.touches[0].clientX;
  const yUp = event.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      moveLeft();
    } else {
      moveRight();
    }
  } else {
    if (yDiff > 0) {
      moveUp();
    } else {
      moveDown();
    }
  }

  xDown = null;
  yDown = null;
};
