import { Observer, interval, timer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('Next: ', value),
  error: (err) => console.error('Error: ', err),
  complete: () => console.info('Completed')
}

const interval$ = interval(1000);
const timer$ = timer(2000);

console.log('start');
interval$.subscribe(observer);
console.log('end');

console.log('start');
timer$.subscribe(observer);
console.log('end');

// Timer starts at 2 seg with changes every 1 seg
const timerInterval$ = timer(2000, 1000);

// Timer starting 5 seg from now
const nowPlus5 = new Date();
nowPlus5.setSeconds( nowPlus5.getSeconds() + 5); 

const timerAt$ = timer(nowPlus5);
