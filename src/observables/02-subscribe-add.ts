import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('Next: ', value),
  error: (err) => console.error('Error: ', err),
  complete: () => console.info('Completed')
}

const intervals$ = new Observable<number>( subscriber => {
  let count = 0;

  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
  }, 1000);

  setTimeout(() => {
    debugger
    subscriber.complete();
  }, 2000);

  return () => {
    clearInterval(interval);
    console.log('Interval cleared');
  }
});

const subs1 = intervals$.subscribe(observer);
const subs2 = intervals$.subscribe(observer);

setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
  console.log('Unsubscribed');
}, 6000);

subs1.add(subs2);

setTimeout(() => {
  subs1.unsubscribe();
  console.log('Unsubscribed All, completed only subs1');
}, 6000);
