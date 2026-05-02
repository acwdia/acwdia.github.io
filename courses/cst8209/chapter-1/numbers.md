# Numbers

In JavaScript, numbers can be written as whole numbers, known as integers, or decimal numbers, known as floating-point numbers. Unlike other languages, JavaScript does not represent integer values as all numbers are floating-point values. JavaScript also has a [`BitInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) type, which is used for working with very large numbers. 

> #### NOTE
> When assigning a number to a variable, no quotes or backticks should be used.

```js
const wholeNumber = 7
const decimal = 7.77
```

## Methods and Functions

JavaScript includes useful methods and functions for working with numbers. These methods will work with any type of number (literals, variables, or expressions). 

### The toFixed() Method

The `toFixed()` method returns a string, with the number written with a specified number of decimals. 

> #### NOTE
> If the original number contains more decimals than specified, then the additional numbers will be rounded. If the original number contains fewer decimals than specified, then zeros will be added to the end. 

```js
const pi = 3.1415
console.log(pi.toFixed(0)) // 3
console.log(pi.toFixed(1)) // 3.1
console.log(pi.toFixed(3)) // 3.142
console.log(pi.toFixed(5)) // 3.14150
```

### The toPrecision() Method

The `toPrecision()` method returns a string with a number written with a specified length.

> #### NOTE
> If the original number contains more digits than specified, then the additional numbers will be rounded. If the original number contains fewer digits than specified, then zeros will be added to the end. 

```js
const a = 3.1415

console.log(a.toPrecision(1)) // 3
console.log(a.toPrecision(3)) // 3.14
console.log(a.toPrecision(5)) // 3.1415
console.log(a.toPrecision(7)) // 3.141500
```

### The parseInt() Function

The `parseInt()` function returns an integer (whole number) from the value provided. The value provided can be a number, string, or array. 

> #### NOTE
> The `parseInt()` function will return `null` if the first value encountered cannot be converted to a number. 

```js
console.log(parseInt(3.1415))         // 3
console.log(parseInt('3.1415'))       // 3
console.log(parseInt([3.1415]))       // 3
console.log(parseInt('pi = 3.1415'))  // null
```

### The parseFloat() Function

The `parseFloat()` function returns a floating point number (decimal) from the value provided. The value provided can be a number, string, or array. 

> #### NOTE
> The `parseFloat()` function will return `null` if the first value encountered cannot be converted to a number. 


```js
console.log(parseFloat(3.1415))        // 3.1415
console.log(parseFloat('3.1415'))      // 3.1415
console.log(parseFloat([3.1415]))      // 3.1415
console.log(parseFloat('pi = 3.1415')) // null
```

## See Also 
- [JavaScript Numbers](https://www.w3schools.com/js/js_numbers.asp)
- [JavaScript Numbers Methods](https://www.w3schools.com/js/js_number_methods.asp)