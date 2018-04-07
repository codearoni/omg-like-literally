# omg-like-literally

> A powerful utility library that gives you the ability to express your code with the poise, intelligence, and brevity of a San Fernando Valley girl.

[![Dependencies](http://img.shields.io/david/codearoni/omg-like-literally.svg?branch=master)](https://david-dm.org/codearoni/omg-like-literally)
[![Build Status](https://travis-ci.org/codearoni/omg-like-literally.svg?branch=master)](https://travis-ci.org/codearoni/omg-like-literally)
[![Build status](https://ci.appveyor.com/api/projects/status/lv9br48iq6gw8915?svg=true)](https://ci.appveyor.com/project/codearoni/omg-like-literally)
[![Coverage Status](https://coveralls.io/repos/github/codearoni/omg-like-literally/badge.svg?branch=master)](https://coveralls.io/github/codearoni/omg-like-literally?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/cb68292f3623533c30e2/maintainability)](https://codeclimate.com/github/codearoni/omg-like-literally/maintainability)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install omg-like-literally
```

## Usage

```javascript
const omgLikeLiterally = require('omg-like-literally');
```

#### barf me out!

Throws an Error. You can optionally pass a message, but it contains a default.

```javascript
const yourFunction (bod) {
    if (!bod) {
        omgLikeLiterally.barfMeOut('missing bod');
    }
};
```

#### can't even!

Returns a random number. Guaranteed to be odd.

```javascript
const oddNumber = omgLikeLiterally.cantEven();
```

#### dying!

Exits the process with status code 1. Useful when your code is falling over like a hot mess and you're literally dying.

```javascript
omgLikeLiterally.dying();
```

#### even!

Returns a random number. Guaranteed to be even.

```javascript
const evenNumber = omgLikeLiterally.even();
```

#### gag me with a spoon!

Functionally equivalent to barf me out, with a different error message.

```javascript
const yourFunction (bod) {
    if (!bod) {
        omgLikeLiterally.gagMeWithASpoon('missing bod');
    }
};
```

#### no duh!

Returns true.

```javascript
const fnReturnsTrue () {
    return omgLikeLiterally.noDuh;
};
```

#### psych!

Returns false.

```javascript
const fnReturnsFalse () {
    return omgLikeLiterally.psych;
};
```

#### take a chill pill!

Attempts to execute a given function and return its result. If an error is thrown, it returns the error instead.

```javascript
let returnValueOrError = omgLikeLiterally.takeAChillPill(yourVolatileOperation);
```

