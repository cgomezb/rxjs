import { Observable, Observer } from 'rxjs';

const obs$ = new Observable<number>(subs => {
  subs.next(1);
  subs.next(2);
  subs.next(3);
  subs.next(4);

  // throw new Error('Error');

  subs.complete();

  subs.next(5);
});

// obs$.subscribe(console.log);

const observer: Observer<number> = {
  next: (value) => console.log('Next: ', value),
  error: (err) => console.error('Error: ', err),
  complete: () => console.info('Completed')
}

obs$.subscribe(observer);

obs$.subscribe({
  next: (value) => console.log('Next: ', value),
  error: (err) => console.error('Error: ', err),
  complete: () => console.info('Completed') 
});
