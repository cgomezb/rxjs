import { fromEvent, interval } from "rxjs";
import { takeUntil, tap, skip } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent<PointerEvent>(button, 'click')
  .pipe(
    tap(() => console.log('Before skip')),
    skip(1),
    tap(() => console.log('After skip'))
  );

counter$.pipe(
  takeUntil(clickBtn$)
)
.subscribe({
  next: val => console.log('next: ', val),
  complete: () => console.log('completed')
});
