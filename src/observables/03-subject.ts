import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('Next: ', value),
  error: (err) => console.error('Error: ', err),
  complete: () => console.info('Completed')
}

const intervals$ = new Observable<number>(subscriber => {
  const interval = setInterval(() => {
    subscriber.next(Math.random());
  }, 2000);

  return () => {
    clearInterval(interval);
    console.log('Interval cleared');
  };
});

/*
  Multi cast
  Is also an observer
  has also next, error and complete
*/

const subject$ = new Subject();
const subscription = intervals$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setInterval(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 4000);
