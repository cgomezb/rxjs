import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const greeting = () => console.log('Hello!');
const greeting2 = name => console.log(`Hello ${name}!`);

asyncScheduler.schedule(greeting, 2000);
asyncScheduler.schedule(greeting2, 2000, 'John Smith');

const subscription = asyncScheduler.schedule(function(state) {
  console.log('state ', state);

  this.schedule(state + 1, 1000);
}, 3000, 0);

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
