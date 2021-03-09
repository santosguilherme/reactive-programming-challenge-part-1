# Build a timer application with TypeScript or Vanilla JavaScript only

Do not forget to read the [readme](../README.md) 

## How to get started

- Launch the app `yarn start` or `npm start` and go to http://localhost:8000/
- Run the tests ! `yarn test` or `npm test`
- Alternatively, run the tests in watch mode `yarn start --watch` or `npm start  -- --watch` then press `a` to run all tests.
- Once your work is done **commit** and **push** `git add src && git commit -m "What did you do?" && git push origin`

Hint: Your application might not run. It probably contains some bugs. You are here to solve them. ;-)

As you can see, you have quite some errors. The issues are the fact we're missing 2 mains functions: 
- `Observable`
- `fromEvent`

## Challenge 1: Build your own version of the `Observable` function

In this challenge you will implement your own version of the famous `Observable`:
- Implement the function `Observable` by following the hints provided by your tests (`npm test -- --watch`)
- The implementation should be done in the [lib/Observable.ts](../lib/observable.ts) file.
- The tests are located next to it in the [lib/Observable.spec.ts](../lib/observable.spec.ts) file. 

Do not forget to run the tests with `yarn start --watch` or `npm start  -- --watch` . 

At the end of this exercise, the following points should be met:
- [ ] All tests should be green
- [ ] The function `Observable` should be implemented