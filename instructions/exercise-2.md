# Build a timer application with TypeScript or Vanilla JavaScript only

Do not forget to read the [readme](../README.md) 

## How to get started

- Launch the app `yarn start` or `npm start` and go to http://localhost:8000/
- Run the tests ! `yarn test` or `npm test`
- Alternatively, run the tests in watch mode `yarn test --watch` or `npm test  -- --watch` then press `a` to run all tests.
- Once your work is done **commit** and **push** `git add src && git commit -m "What did you do?" && git push origin`

Hint: Your application might not run. It probably contains some bugs. You are here to solve them. ;-)

As you can see, you have quite some errors. The issues are the fact we're missing 2 mains functions: 
- `Observable`
- `fromEvent`

## Challenge 2: Build your an observable from scratch `fromEvent`

In this challenge you will implement your own version of `fromEvent`:
- Implement the function `fromEvent` by following the hints provided by your tests (`npm test -- --watch`)
- The implementation should be done in the [lib/fromEvent.ts](../lib/fromEvent.ts) file.
- The tests are located next to it in the [lib/fromEvent.spec.ts](../lib/fromEvent.spec.ts) file. 

Hint: You'll need the `Observable` function implemented in the previous exercise.

Do not forget to run the tests with `yarn start --watch` or `npm start  -- --watch` . 

At the end of this exercise, the following points should be met:
- [x] All tests should be green
- [x] The function `fromEvent` should be implemented
