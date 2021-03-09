# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @divyajagadish/lotide`

**Require it:**

`const _ = require('@divyajagadish/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head`:Returns the first element in an Array
*  `tail`:Returns the tail of an array
*  `middle`:Returns the middle portion of an Array
*  `assertArraysEqual`: Assert arrays are Equal
*  `assertEqual` :compare two values and assert Equal
*  `assertObjectsEqual` : Asserts whether the Object are Equal or not.
* `countLetters`: Take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly` : countOnly needs to return a proper report on all the strings found in the input array, and their respective counts only when it meets the  truthy condition.
* `eqArrays`:Check whether arrays are Equal
* `eqObjects`: Check whether Objects are Equal
* `findKey `:Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue` : Returns the key of a particular Key Value pair.
* `flatten`: Takes an array containing elements including nested arrays of elements, and return a "flattened" version of the array
* `letterPositions`: return all the indices (zero-based positions) in the string where each character is found.
*  `map`: map function will return a new array based on the results of the callback function.
* `takeUntil`:Return a"slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without`:Returns an array without the specified element.

