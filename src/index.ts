/**
 * caution: this implementation doesn't follow good practise in Reactive Programming.
 * In this first version, we focus on implementing basics observable.
 * As we progress in this learning, we will use established rules and good practises in
 * Reactive Programming.
 */

import {
  btnStart$,
  btnCancel$,
  timerDisplay,
  millisecondsToStr,
} from "./utils";

let counter = 0;
let id: NodeJS.Timeout = null;

btnStart$.subscribe({
  next() {
    id = setInterval(() => {
      timerDisplay.textContent = millisecondsToStr(counter++);
    }, 1000);
  },
  complete() {
    console.log("completed");
  },
});

btnCancel$.subscribe({
  next() {
    clearInterval(id);
  },
});
