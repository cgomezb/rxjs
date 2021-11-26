import { map, range, tap } from "rxjs";

const numbers$ = range(1,5);

numbers$
  .pipe(
    tap<number>((value: number) => console.log('Before: ', value)),
    map<number, number>((value) => value * 10),
    tap<number>({
      next: (value: number) => console.log('After ', value),
      complete: () => console.log('Completed')
    })
  )
  .subscribe((value: number) => console.log('Subs ', value));
