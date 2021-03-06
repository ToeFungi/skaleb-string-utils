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
`reverse(string)` reverses and returns the given string.
```typescript
import { reverse } from './index'

// gnirts emos
return reverse('some string')
```

`capitalCase(string)` capitalizes each individual word in a given string and returns the new string.
```typescript
import { capitalCase } from './index'

// Some Or Other String
return capitalCase('some or other string')
```

`camelCase(string)` converts the given string to camelCaseFormat and returns it.
```typescript
import { camelCase } from './index'

// thisIsNowCamelCase
return camelCase('This is now camel case')
```

`toBinary(string, ?deliminate)` converts the given string or sentence into binary code. This by default is returned as 
a single string however the response can be set to be deliminated.
```typescript
import { toBinary } from './index'
import { Delimination } from './enums/Delimination'

// No delimination
// 1110011110111111011011100101100000110001011010011101110110000111100101111001
return toBinary('some binary')

// Space deliminated
// 1110011 1101111 1101101 1100101 100000 1100010 1101001 1101110 1100001 1110010 1111001
return toBinary('some binary', Delimination.SPACES)

// Retain original delimination
// 1110011110111111011011100101 110001011010011101110110000111100101111001
return toBinary('some binary', Delimination.ORIGINAL)
```

`toHexadecimal(string, ?deliminate)` converts the given string or sentence into hexadecimal. This be default is returned
as a single string however the response can be set to be deliminated.
```typescript
import { toHexadecimal } from './index'
import { Delimination } from './enums/Delimination'

// No delimination
// 68657861646563696d616c
return toHexadecimal('hexadecimal')

// Space deliminated
// 73 6f 6d 65 20 68 65 78 61 64 65 63 69 6d 61 6c
return toHexadecimal('some hexadecimal', Delimination.SPACES)

// Retain original delimination
// 736f6d65 68657861646563696d616c
return toHexadecimal('some hexadecimal', Delimination.ORIGINAL)
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
 