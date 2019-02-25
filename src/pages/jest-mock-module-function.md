---
title: Mocking a node module's function with Jest
date: '2019-02-25'
spoiler: Mocking a node module function used inside another function under test with Jest.
---

[Jest](https://jestjs.io) is a framework for testing JavaScript. In this, we will do a quick dive into how to mock a function from a node module that is used in our file under test.

-----

Lets start out with a file that imports a function from `lodash`. We will use this function to check if an object provided has a path and throw an error if the path isn't found.

```javascript
import has from 'lodash/has';

export const requireProp = (obj, path) => {
  if (!has(obj, path)) {
    throw new Error(`Object is missing required property ${path}`);
  }
};
```

We can consider `has()` to be a black box that will always work. With that consideration, our test must check for two things:

1. `has()` returns `false` - an error should be thrown
1. `has()` returns `true` - no error should be thrown


```javascript
// Import `has` from lodash
import has from 'lodash/has';
// Import our function under test
import { requireProp } from './index';

// Tell jest to mock the module
jest.mock('lodash/has');

test('error should be thrown if path not part of obj', () => {
  // Tell `has` to return `false` no matter what
  has.mockReturnValueOnce(false);
  
  // Run `requireProp` inside of a function so that `expect` can trap the error
  expect(() => requireProp({}, 'b')).toThrow();
});

test('error should not be thrown if path is part of obj', () => {
  // Tell `has` to return `true` no matter what.
  has.mockReturnValueOnce(true);
  
  // Run `requireProp` inside of a function so that `expect` can trap the error
  expect(() => requireProp({}, 'b')).not.toThrow();
});

```

What we've done here is import the module, mock it with Jest, and forced it to return something we control so that both code paths can be tested - when an object has a path and when it doesn't.

-----

You might be wondering how Jest was able to intercept the import statement and mock the module even though it wasn't mocked untill after the import already happened.

Jest ties into babel via `babel-jest` and automatically hoists `jest.mock()` calls to the top of the module above the import statements. More info on on this can be found in [the Jest docs](https://jestjs.io/docs/en/manual-mocks#using-with-es-module-imports)
