import { from, take, tap } from "rxjs";

const numbers$ = from([1,2,3,4,5]).pipe(
  tap(val => console.log('tap origin: ', val))
);

numbers$
  .pipe(
    tap(val => console.log('tap internal: ', val)),
    take(3)
  )
  .subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('completed')
  });
