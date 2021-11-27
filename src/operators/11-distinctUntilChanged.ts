import { from, ObservableInput } from "rxjs";
import { distinctUntilChanged } from 'rxjs/operators';

const numbers = [1,'1',1,3,3,2,2,4,4,5,3,1,'1'];
const numbers$ = from<ObservableInput<number|string>>(numbers);

numbers$.pipe(
  distinctUntilChanged()
)
.subscribe(console.log);

// Using objects

interface Character {
  name: string;
};

const characters: Character[] = [
  { name: 'A' },
  { name: 'A' },
  { name: 'C' },
  { name: 'D' },
  { name: 'B' },
  { name: 'B' },
  { name: 'C' }
];

from(characters)
.pipe(
  distinctUntilChanged((prev, curr) => prev.name === curr.name)
)
.subscribe(console.log);
