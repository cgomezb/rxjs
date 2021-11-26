import { from, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('Next: ', value),
  error: (err) => console.error('Error: ', err),
  complete: () => console.info('Completed')
}

const source$ = from(fetch('https://api.github.com/users/cgomezb'));

source$.subscribe(async (response) => {
  const data = await response.json();
  console.log(data);
});

// Using generator

const myGenerator = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const myIterable = myGenerator();

from(myIterable).subscribe(observer);
