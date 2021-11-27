import { from, ObservableInput } from "rxjs";
import { distinct } from 'rxjs/operators';

const numbers = [1,'1',1,3,3,2,2,4,4,5,3,1,'1'];
const numbers$ = from<ObservableInput<number|string>>(numbers);

numbers$.pipe(
  distinct()
)
.subscribe(console.log);

// Using objects

interface Character {
  name: string;
};

const characters: Character[] = [
  { name: 'A' },
  { name: 'B' },
  { name: 'C' },
  { name: 'D' },
  { name: 'A' },
  { name: 'B' },
  { name: 'C' },
];

from(characters)
.pipe(
  distinct(character => character.name)
)
.subscribe(console.log);
