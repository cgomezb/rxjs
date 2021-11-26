import { fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpMap$ = keyUp$.pipe(
  map((value: KeyboardEvent) => value.code)
);

const keyUpPluck$ = keyUp$.pipe(
  pluck('target', 'baseURI')
);

const keyUpMapTo$ = keyUp$.pipe(
  mapTo('key pressed')
);

keyUp$.subscribe(console.log);
keyUpMap$.subscribe(value => console.log('code ', value));
keyUpPluck$.subscribe(value => console.log('target baseURI ', value));
keyUpMapTo$.subscribe(console.log);
