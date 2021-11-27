import { from, Observable } from 'rxjs';
import { take, scan, map } from 'rxjs/operators';

const numbers = [1,2,3,4,5];

const totalReducer = (acumulator: number, current: number) => acumulator + current;
const seed = 0;

from(numbers)
  .pipe(
    take(3),
    scan(totalReducer, seed)
  )
  .subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
  });


// Scan to handle a state

interface User {
  id?: string;
  authenticated?: boolean;
  token?: string;
  age?: number;
}

const users: User[] = [
  { id: '1', authenticated: false, token: null },
  { id: '1', authenticated: true, token: 'ABC' },
  { id: '1', authenticated: true, token: 'ABC123' }
];

const state$: Observable<User> = from(users)
  .pipe(
    scan<User>((acc, cur) => ({ ...acc, ...cur }))
  );

state$.pipe(
  map(state => state)
)
.subscribe(console.log);

state$.pipe(
  map(state => state.id)
)
.subscribe(console.log);
