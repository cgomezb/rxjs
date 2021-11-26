import { asyncScheduler, range } from 'rxjs';

// Sync
const obs$ = range(1,5);

console.log('start');
obs$.subscribe(console.log);
console.log('end');

// Async
const obs2$ = range(1,5, asyncScheduler);

console.log('start');
obs2$.subscribe(console.log);
console.log('end');
