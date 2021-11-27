import { from } from "rxjs";
import { distinctUntilKeyChanged } from 'rxjs/operators';

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
  distinctUntilKeyChanged('name')
)
.subscribe(console.log);
