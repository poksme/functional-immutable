# Functional Immutable

Iteratee-first data-last null-safe curried functions wrapper for immutable.js

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat)](https://opensource.org/licenses/MIT) [![npm: functional-immutable](https://img.shields.io/npm/v/functional-immutable.svg?style=flat)](https://www.npmjs.com/package/functional-immutable) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style-flat)](https://lernajs.io/)

> Are you using Immutable.js with React and Redux? Take a look at [react-redux-immutabe](https://github.com/poksme/react-redux-immutable) for mapping your immutable state to your props without performance hit.

## Installation

Functional Immutable relies on a single peer dependency, it requires **Immutable 3** already installed.

```
npm install --save functional-immutable
```

## Usage

Functional Immutable aims to provide all immutable object methods as curried, data-last, null-safe functions. It is designed to work seamlessly in an point-free style program.

For example :

```javascript
import fp from "lodash/fp";
import Immutable from "immutable";
import * as fi from "functional-immutable";

const immutableObject = Immutable.fromJS({
  user: {
    lastName: "Skywalker"
  }
});

export const getUppercaseLastName = fp.flow(
  fi.getIn(['user', 'lastName']),
  fp.defaultTo('Doe'),
  fp.toUpper,
);

getUppercaseLastName(immutableObject); // SKYWALKER
getUppercaseLastName(); // DOE
```

Also, Functional Immutable is non-opinionated and will work with any point-free library such as Ramda.

```javascript
import R from "ramda";
import Immutable from "immutable";
import * as fi from "functional-immutable";

const immutableObject = Immutable.fromJS({
  user: {
    lastName: "Skywalker"
  }
});

export const getUppercaseLastName = R.compose(
  R.toUpper,
  R.defaultTo('Doe'),
  fi.getIn(['user', 'lastName']),
);

getUppercaseLastName(immutableObject); // SKYWALKER
getUppercaseLastName(); // DOE
```

It should also shine with Redux selectors such as reselect or re-reselect.

```javascript
import { createSelector } from "reselect";
import Immutable from "immutable";
import * as fi from "functional-immutable";

const applicationState = Immutable.fromJS({
  user: {
    lastName: "Skywalker"
  }
});

export const getUppercaseLastName = createSelector(
  fp.flow(
    fi.getIn(['user', 'lastName']),
    fp.defaultTo('Doe')
  ),
  fp.toUpper
);

getUppercaseLastName(applicationState); // SKYWALKER
getUppercaseLastName(); // DOE
```

## Api Changes

### `delete` => `deleteAt`

`delete` being a reserved keyword, the delete method has been re-exported as `deleteAt`.

## Contribute

### Something missing?

Found a missing function? Feel free to contribute by opening a Pull Request.

This wrapper relies on naïve re-exports of Immutable object methods. Here is how to add a missing method called `missing`.

In [index.js](packages/functional-immutable/src/index.js) add the following:

```javascript
export const missing = (...vargs) => data => safeApply(data, 'missing', vargs);
```

### Test coverage

You can also contribute by writing unit tests, for example by rewriting existing [Immutable 3 Unit Tests](https://github.com/facebook/immutable-js/tree/v3.8.2/__tests__) using `functional-immutable`.
