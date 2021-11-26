import { filter, from } from "rxjs";

interface Character {
  type: CharacterType;
  name: string;
};

enum CharacterType {
  Heroe = 'heroe',
  Villian = 'villain'
}

const characters: Character[] = [
  {
    type: CharacterType.Heroe,
    name: 'Batman'
  },
  {
    type: CharacterType.Villian,
    name: 'Joker'
  },
  {
    type: CharacterType.Heroe,
    name: 'Robin'
  }
];

const characterStream$ = from<Character[]>(characters);

characterStream$
  .pipe(
    filter((character: Character) => character.type === CharacterType.Heroe)
  )
  .subscribe(console.log);

characterStream$
  .pipe(
    filter((character: Character) => character.type === CharacterType.Villian)
  )
  .subscribe(console.log);
