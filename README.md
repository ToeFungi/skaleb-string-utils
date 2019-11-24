# String Utils
[![NPM Version](https://badge.fury.io/js/skaleb-string-utils.svg)](https://badge.fury.io/js/skaleb-string-utils)
[![Build Status](https://travis-ci.org/ToeFungi/skaleb-string-utils.svg?branch=master)](https://travis-ci.org/ToeFungi/skaleb-string-utils)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=skaleb-string-utils&metric=alert_status)](https://sonarcloud.io/dashboard?id=skaleb-string-utils)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=skaleb-string-utils&metric=bugs)](https://sonarcloud.io/dashboard?id=skaleb-string-utils)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=skaleb-string-utils&metric=code_smells)](https://sonarcloud.io/dashboard?id=skaleb-string-utils)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=skaleb-string-utils&metric=coverage)](https://sonarcloud.io/dashboard?id=skaleb-string-utils)

This package provides new String functionality that is provided by modifying the existing String prototype. It provides
various utility functions that may come in handy from time to time for various edge cases. There is no instantiation
required to use this package, merely importing the file at your projects entry.

## Installation
To install this package you can simply use the install command below.

```
$ npm i --save skaleb-string-utils
```

## Usage
importing the file
```typescript
import './index'

const word = 'word'
const sentence = 'some sentence'
```

`.isPalindromic()` determines whether or not the given string or sentence is a palindrome.
```typescript
const word = 'racecar'

// true
return word.isPalindromic()

const word = 'race car'

// false
return word.isPalindromic()
```

`.reverse()` reverses and returns the given string.
```typescript
// drow
return word.reverse()

// ecnetnes emos
return sentence.reverse()
```

`.reverseWords()` reverses the words in a sentence while retaining the position of the words in that sentence.
```typescript
// drow
return word.reverseWords()

// emos ecnetnes
return sentence.reverseWords()
```

`.wordCount()` returns the number of words in the given sentence.
```typescript
// 2
return sentence.wordCount()
```

`.toCapitalCase()` capitalizes each individual word in a given string and returns the new string.
```typescript
// Some Sentence
return sentence.toCapitalCase()
```

`.toCamelCase()` converts the given string to camelCaseFormat and returns it.
```typescript
// someSentence
return sentence.toCamelCase()
```

`.toKebabCase()` converts the given string to kebab-case-format and returns it.
```typescript
// some-sentence
return sentence.toKebabCase()

// SOME-SENTENCE
return sentence.toKebabCase(true)
```

`.toSnakeCase()` converts the given string to snake_case_format and returns it.
```typescript
// some_sentence
return sentence.toSnakeCase()

// SOME_SENTENCE
return sentence.toSnakeCase(true)
```

`.toBinary(?deliminate)` converts the given string or sentence into binary code. This by default is returned as 
a single string however the response can be set to be deliminated.
```typescript
import { Delimination } from './enums/Delimination'

const word = 'some binary'

// No delimination
// 1110011110111111011011100101100000110001011010011101110110000111100101111001
return word.toBinary()

// Space deliminated
// 1110011 1101111 1101101 1100101 100000 1100010 1101001 1101110 1100001 1110010 1111001
return word.toBinary(Delimination.SPACES)

// Retain original delimination
// 1110011110111111011011100101 110001011010011101110110000111100101111001
return word.toBinary(Delimination.ORIGINAL)
```

`.toHexadecimal(?deliminate)` converts the given string or sentence into hexadecimal. This be default is returned
as a single string however the response can be set to be deliminated.
```typescript
import { Delimination } from './enums/Delimination'

const word = 'some hexadecimal'

// No delimination
// 736f6d6568657861646563696d616c
return word.toHexadecimal()

// Space deliminated
// 73 6f 6d 65 20 68 65 78 61 64 65 63 69 6d 61 6c
return word.toHexadecimal(Delimination.SPACES)

// Retain original delimination
// 736f6d65 68657861646563696d616c
return word.toHexadecimal(Delimination.ORIGINAL)
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
 