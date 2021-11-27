import { of } from 'rxjs';
import { take, reduce } from 'rxjs/operators';

const numbers = [1,2,3,4,5];

const totalReducer = (acumulator: number, current: number) => acumulator + current;
const seed = 0;

of(...numbers)
  .pipe(
    take(3),
    reduce(totalReducer, seed)
  )
  .subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
  });
