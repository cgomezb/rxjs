import { fromEvent } from "rxjs";
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');
const inclusive = true;

click$.pipe(
  map(({ x, y }) => ({ x, y })),
  takeWhile(({ y }) => y <= 150, inclusive)
)
.subscribe({
  next: val => console.log('next: ', val),
  complete: () => console.log('completed')
});
