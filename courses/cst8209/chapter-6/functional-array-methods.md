# Functional Array Methods

Functional array methods are methods that take a function as an argument. Using these following methods can be faster, use less code, and be easier to read than using loops. 

## filter

The [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method creates a new array with all items that pass the test implemented by the provided function.

The following examples will create a new array containing only the even numbers from the original array. 

**Using a loop**
```js
const numbers = [1, 2, 3, 4, 5]
const even = []

for (const number of numbers) {
  if (number % 2 === 0) {
    even.push(number)
  }
}

console.log(even) //[2, 4]
```

**Using the filter() method**
```js
const numbers = [1, 2, 3, 4, 5]

const even = numbers.filter(number => number % 2 === 0)

console.log(even) // [2, 4]
```

## find

The [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method returns the value of the first element that passes the test implemented by the provided function.

The following examples will search for the first number that is greater than 5.

**Using a loop**
```js
const numbers = [3, 5, 2, 7, 1, 8]
let value; 

for (number of numbers) {
  if (number > 5) {
    value = number
  }
}

console.log(value) // 7
```

**Using the find() method**
```js
const numbers = [3, 5, 2, 7, 1, 8]
const value = numbers.find(number => number > 5)

console.log(value) // 7
```

## forEach
The [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method executes a provided function once for each array element. The provided function will have access to the array's values and indexes. The `forEach` method can be used as a replacement for the `for...of` loop.

> #### NOTE
> Unlike other functional array methods, the `forEach` method does NOT create or return a new array. Changes made inside the callback function will alter the original array.

**Using a loop**
```js
const letters = ['a', 'b', 'c']

for (const letter of letters) {
  console.log(letter)
}
```

**Using the forEach() method**
```js
const letters = ['a', 'b', 'c']
letters.forEach(letter => console.log(letter))
```

## map

The [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) creates a new array with the results of calling a provided function on every item in the calling array. 

The following examples will create a new array that contains each number of the original array doubled.

**Using a loop**
```js
const numbers = [1, 3, 5, 7]
const double = []

for (const number of numbers) {
  double.push(number * 2)
}

console.log(double) // [2, 6, 10, 14]

```

**Using the map() method**

```js
const numbers = [1, 3, 5, 7]

const double = numbers.map(number => number * 2)

console.log(double) // [2, 6, 10, 14] 
```
 
## reduce
The [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method take each item of an array and *reduces* them down to a single value by calling the provided function on each item. This is accomplished by returning the next value of the accumulator each time the function is called. 

> #### NOTE
> By default, the accumulator is set to the first value in the array. This value can be changed by adding a second argument after the callback function.


The following examples will get the total of all the numbers in the original array. 

**Using a loop**

```js
const numbers = [7, 13, 27, 45]
// let must be used here because the value will change
let sum = 0 

for (const number of numbers) {
  sum += number
}

console.log(sum) // 92
```

**Using the reduce() method**
```js
const numbers = [7, 13, 27, 45]

const sum = numbers.reduce((accumulator, number) => accumulator + number)

console.log(sum) // 92
```

## toSorted

The [`toSorted()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted) method will return a new array with the elements sorted in ascending order without affecting the original. Like the `sort()` method, `toSorted()` method converts all items to strings and then compares their UTF-16 code unit values. 

```js
const colors = ['Red', 'Blue', 'Green']
const sortedColors = colors.toSorted()
console.log(sortedColors) // ['Blue', 'Green', 'Red']
console.log(colors) // ['Red', 'Blue', 'Green']

const numbers = [1, 20, 4, 100]
const sortedNumbers = numbers.toSorted()
console.log(sortedNumbers) // [1, 100, 20, 4]
console.log(numbers) // [1, 20, 4, 100]
```

It is possible to alter the sort order of the `toSorted()` method by adding a compare function. This can make it possible to over the limitations of the default sort order.

```js
const numbers = [1, 20, 4, 100]

// Using a compare function when sorting 
const sortedNumbers = numbers.toSorted((a, b) => a - b)
console.log(sortedNumbers) // [1, 4, 20, 100]
```

Like numbers, strings using different casing will also be sorted with all words starting with capital coming first. 

A more robust and case-ignoring example can be accomplished once again with a compare function. 

```js
const colors = ['orange', 'Purple', 'green']
const sortedColors = colors.toSorted((a, b) => 
  (a.toLowerCase() < b.toLowerCase()) ? -1 : 
  (a.toLowerCase() > b.toLowerCase()) ?  1 : 0
)
console.log(sortedColors) // ['green', 'orange', 'Purple']
```
