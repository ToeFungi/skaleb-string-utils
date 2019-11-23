# String Utils
[![NPM Version](https://badge.fury.io/js/skaleb-string-utils.svg)](https://badge.fury.io/js/skaleb-string-utils)
[![Build Status](https://travis-ci.org/ToeFungi/skaleb-string-utils.svg?branch=master)](https://travis-ci.org/ToeFungi/skaleb-string-utils)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=skaleb-string-utils&metric=alert_status)](https://sonarcloud.io/dashboard?id=skaleb-string-utils)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=skaleb-string-utils&metric=bugs)](https://sonarcloud.io/dashboard?id=skaleb-string-utils)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=skaleb-string-utils&metric=code_smells)](https://sonarcloud.io/dashboard?id=skaleb-string-utils)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=skaleb-string-utils&metric=coverage)](https://sonarcloud.io/dashboard?id=skaleb-string-utils)

This package provides easy to use string utility functions that provide more functionality above and beyond normal 
string functions. These functions can be imported individually, without instantiation.

## Installation
To install this package you can simply use the install command below.

```
$ npm i --save skaleb-string-utils
```

## Usage
`reverse(string)` reverses and returns the given string
```typescript
import { reverse } from './index'

// gnirts emos
return reverse('some string')
```

`capitalCase(string)` capitalizes each individual word in a given string and returns the new string
```typescript
import { capitalCase } from './index'

// Some Or Other String
return capitalCase('some or other string')
```

`camelCase(string)` converts the given string to camelCaseFormat and returns it
```typescript
import { camelCase } from './index'

// thisIsNowCamelCase
return camelCase('This is now camel case')
```

## Tests
This project is completely covered by unit tests. Various cases have been accounted for both in the codebase and in the 
tests covering it. If a bug is picked up regarding the test suite or code, feel free to make a contribution to help 
correct the bug.

To run the tests, you can simply run the following `test` command/s.

```
$ npm run lint
$ npm run test
$ npm run coverage
```

## Contributions
Feedback and contributions are more than welcome. Should you feel there is something you wish to contribute to this 
paginator, feel free to make a merge request. Ensure that whatever proposed change, has tests covering various cases for
the change.
 