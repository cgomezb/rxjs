import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
  debounceTime(3000)
)
.subscribe(console.log);


// Using an input

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(1000),
  map((value: KeyboardEvent) => (value.target as HTMLInputElement).value), // or pluck('target', 'value')
  distinctUntilChanged()
)
.subscribe(console.log);
