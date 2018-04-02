# omg-like-literally

> A powerful utility library that gives you the ability to express your code with the poise, intelligence, and brevity of a San Fernando Valley girl.

[![Dependencies](http://img.shields.io/david/codearoni/omg-like-literally.svg?branch=master)](https://david-dm.org/codearoni/omg-like-literally)
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
    const yourFunction (cb) {

        yourOperation(function (err) {

            if (err) {
                return cb(omgLikeLiterally.barfMeOut(err.message)); 
            }

            return cb(null);
        });
    };
```

#### can't even!

Returns a random number. Guaranteed to be odd.

```javascript
    const oddNumber = omgLikeLiterally.cantEven();
```

#### even!

Returns a random number. Guaranteed to be even.

```javascript
    const evenNumber = omgLikeLiterally.even();
```

#### gag me with a spoon!

Functionally equivalent to barf me out, with a different error message.

```javascript
    const yourFunction (cb) {

        yourOperation(function (err) {

            if (err) {
                return cb(omgLikeLiterally.gagMeWithASpoon(err.message)); 
            }

            return cb(null);
        });
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

