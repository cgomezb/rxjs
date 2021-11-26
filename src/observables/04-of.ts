import { of } from 'rxjs';

const obs$ = of(...[1,2,3,4,5]);

obs$.subscribe({
  next: (next) => console.log(next),
  error: () => null,
  complete: () => console.log('Sequence completed')
});
