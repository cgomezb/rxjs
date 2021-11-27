import { fromEvent } from "rxjs";
import { first, map, tap } from 'rxjs/operators';

interface Pointer {
  clientX: number;
  clientY: number;
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    tap<PointerEvent>(() => console.log('From tap')),
    map<PointerEvent, Pointer>(({ clientX, clientY }) => ({ clientX, clientY })),
    first<Pointer>((pointer: Pointer) => pointer.clientY > 150)
  )
  .subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('completed')
  });
