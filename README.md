# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jusungchai/lotide`

**Require it:**

`const _ = require('@jusungchai/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(a1, a2)`: check if array a1 equals array a2
* `assertEqual(actual, expected)`: check if actual equals expected
* `assertObjectsEqual(actual, expected)`: check if object 1 equals object 2
* `countLetters(str)`: count non space characters
* `countOnly(allItems, itemsToCount)`: count items to be counted in an object
* `eqArrays(a1, a2)`: check if array a1 equals array a2
* `eqObjects(object1, object2)`: check if object1 equals object2
* `findKey(object, callback)`: find key of callback
* `findKeyByValue(object, value)`: find key by value in object
* `flatten(arrOfArr)`: merge nested array into array
* `head(arr)`: find first value in array
* `letterPositions(sentence)`: find positions of a letter in sentence
* `map(array, callback)`: map first letter of word after the word in array
* `middle(arr)`: find middle value of array
* `tail(arr)`: find last element of array
* `takeUntil(array, callback)`: return array of elements from start until value is met
* `without(source, itemsToRemove)`: remove all wanted items from source array 
