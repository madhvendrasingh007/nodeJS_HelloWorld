# Lodash Basics Guide

[Lodash](https://lodash.com/) is a modern JavaScript utility library that provides helpful functions for common programming tasks. It simplifies working with arrays, numbers, objects, strings, etc.

## Table of Contents

- [Installation](#installation)
- [Array Operations](#array-operations)
- [Collection Operations](#collection-operations)
- [Object Operations](#object-operations)
- [Function Operations](#function-operations)
- [String Operations](#string-operations)
- [Number Operations](#number-operations)
- [Utility Functions](#utility-functions)
- [Chaining](#chaining)

## Installation

```bash
# Using npm
npm install lodash

# Using yarn
yarn add lodash
```

## Importing Lodash

```javascript
// Import the entire lodash library
const _ = require('lodash');

// ES6 import
import _ from 'lodash';

// Import specific functions (better for tree-shaking)
import { map, filter } from 'lodash';
// OR
import map from 'lodash/map';
import filter from 'lodash/filter';
```

## Array Operations

### _.chunk

Split an array into chunks of the specified size.

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.chunk(array, 2)); 
// => [[1, 2], [3, 4], [5, 6], [7, 8]]

console.log(_.chunk(array, 3)); 
// => [[1, 2, 3], [4, 5, 6], [7, 8]]
```

### _.compact

Remove falsey values (false, null, 0, "", undefined, and NaN) from an array.

```javascript
const array = [0, 1, false, 2, '', 3, null, undefined, NaN];
console.log(_.compact(array)); 
// => [1, 2, 3]
```

### _.difference

Create an array of values not included in the other provided arrays.

```javascript
console.log(_.difference([2, 1, 5], [2, 3, 4])); 
// => [1, 5]
```

### _.flatten and _.flattenDeep

Flatten nested arrays.

```javascript
// Flatten one level
console.log(_.flatten([1, [2, [3, [4]], 5]])); 
// => [1, 2, [3, [4]], 5]

// Flatten deeply
console.log(_.flattenDeep([1, [2, [3, [4]], 5]])); 
// => [1, 2, 3, 4, 5]
```

### _.intersection

Create an array of unique values that are included in all given arrays.

```javascript
console.log(_.intersection([2, 1], [2, 3], [2, 4])); 
// => [2]
```

### _.pull and _.remove

Remove elements from an array.

```javascript
// Pull modifies the original array
const array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(array, 'a', 'c');
console.log(array); 
// => ['b', 'b']

// Remove elements that satisfy a predicate
const numbers = [1, 2, 3, 4, 5];
const evens = _.remove(numbers, n => n % 2 === 0);
console.log(numbers); // => [1, 3, 5]
console.log(evens);   // => [2, 4]
```

### _.uniq

Create a duplicate-free version of an array.

```javascript
console.log(_.uniq([2, 1, 2, 3, 1])); 
// => [2, 1, 3]
```

## Collection Operations

These methods work on both arrays and objects.

### _.filter

Filter elements that satisfy a condition.

```javascript
const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
];

console.log(_.filter(users, user => user.active)); 
// => [{ 'user': 'barney', 'age': 36, 'active': true }, 
//     { 'user': 'pebbles', 'age': 1, 'active': true }]

// Shorthand syntax using property
console.log(_.filter(users, 'active')); 
// same result
```

### _.find

Find the first element that satisfies a condition.

```javascript
console.log(_.find(users, user => user.age < 40)); 
// => { 'user': 'barney', 'age': 36, 'active': true }

// Shorthand syntax
console.log(_.find(users, { 'age': 1, 'active': true })); 
// => { 'user': 'pebbles', 'age': 1, 'active': true }
```

### _.map

Transform each element in a collection.

```javascript
console.log(_.map(users, 'user')); 
// => ['barney', 'fred', 'pebbles']

console.log(_.map(users, user => user.user.toUpperCase())); 
// => ['BARNEY', 'FRED', 'PEBBLES']
```

### _.reduce

Reduce a collection to a single value.

```javascript
console.log(_.reduce([1, 2, 3], (sum, n) => sum + n, 0)); 
// => 6

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = _.reduce(fruits, (result, fruit) => {
  result[fruit] = (result[fruit] || 0) + 1;
  return result;
}, {});
console.log(count); 
// => { 'apple': 3, 'banana': 2, 'orange': 1 }
```

### _.groupBy

Group elements by a criterion.

```javascript
console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor)); 
// => { '4': [4.2], '6': [6.1, 6.3] }

console.log(_.groupBy(['one', 'two', 'three'], 'length')); 
// => { '3': ['one', 'two'], '5': ['three'] }
```

### _.sortBy

Sort a collection.

```javascript
console.log(_.sortBy(users, 'age')); 
// => sorted by age in ascending order

console.log(_.sortBy(users, ['active', 'age'])); 
// => sort by active, then by age
```

## Object Operations

### _.assign / _.extend

Assign properties from source objects to the destination object.

```javascript
const defaults = { 'a': 1, 'b': 2 };
const options = { 'b': 3 };

console.log(_.assign({}, defaults, options)); 
// => { 'a': 1, 'b': 3 }
```

### _.get

Safely get a value from a nested object.

```javascript
const object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(_.get(object, 'a[0].b.c')); 
// => 3

console.log(_.get(object, 'a.b.c', 'default')); 
// => 'default'
```

### _.has

Check if a path exists in an object.

```javascript
const object = { 'a': { 'b': 2 } };

console.log(_.has(object, 'a.b')); 
// => true

console.log(_.has(object, 'a.c')); 
// => false
```

### _.merge

Recursively merge objects.

```javascript
const object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

const other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

console.log(_.merge(object, other)); 
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```

### _.omit and _.pick

Create a new object with selected or omitted properties.

```javascript
const object = { 'a': 1, 'b': 2, 'c': 3 };

console.log(_.omit(object, ['a', 'c'])); 
// => { 'b': 2 }

console.log(_.pick(object, ['a', 'c'])); 
// => { 'a': 1, 'c': 3 }
```

## Function Operations

### _.debounce

Create a debounced function that delays invoking the provided function.

```javascript
// Only calls the function if 300ms have passed without it being called again
const debounced = _.debounce(function(text) {
  console.log('Searching for:', text);
  // Execute search here
}, 300);

// In a search input event handler
searchInput.addEventListener('input', function(e) {
  debounced(e.target.value);
});
```

### _.throttle

Create a throttled function that only invokes at most once per every wait milliseconds.

```javascript
// Executes at most once every 300ms
const throttled = _.throttle(function() {
  console.log('Scroll event handled!');
  // Execute scroll handler logic
}, 300);

// In a scroll event handler
window.addEventListener('scroll', throttled);
```

### _.once

Create a function that is restricted to be called once.

```javascript
const initialize = _.once(function() {
  console.log('Initialize only once!');
  // Initialization logic
});

initialize(); // => 'Initialize only once!'
initialize(); // => does nothing
```

### _.memoize

Create a function that memoizes (caches) the result of a function.

```javascript
const fibonacci = _.memoize(function(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // => 55 (calculated once)
console.log(fibonacci(10)); // => 55 (retrieved from cache)
```

## String Operations

### _.camelCase, _.kebabCase, _.snakeCase

Convert strings to different cases.

```javascript
console.log(_.camelCase('Foo Bar')); 
// => 'fooBar'

console.log(_.kebabCase('fooBar')); 
// => 'foo-bar'

console.log(_.snakeCase('fooBar')); 
// => 'foo_bar'
```

### _.capitalize

Capitalize the first letter of a string.

```javascript
console.log(_.capitalize('fred')); 
// => 'Fred'
```

### _.trim, _.trimStart, _.trimEnd

Remove leading and trailing whitespace.

```javascript
console.log(_.trim('  abc  ')); 
// => 'abc'

console.log(_.trimStart('  abc  ')); 
// => 'abc  '

console.log(_.trimEnd('  abc  ')); 
// => '  abc'
```

## Number Operations

### _.clamp

Clamp a number between lower and upper bounds.

```javascript
console.log(_.clamp(-10, -5, 5)); // => -5
console.log(_.clamp(10, -5, 5));  // => 5
console.log(_.clamp(3, -5, 5));   // => 3
```

### _.random

Generate a random number.

```javascript
console.log(_.random(0, 5));      // => a number between 0 and 5
console.log(_.random(5));         // => a number between 0 and 5
console.log(_.random(1.2, 5.2));  // => a floating-point number between 1.2 and 5.2
console.log(_.random(1, 5, true)); // => a floating-point number between 1 and 5
```

## Utility Functions

### _.times

Invoke a function n times.

```javascript
const results = _.times(3, String);
console.log(results); 
// => ['0', '1', '2']

const randomNumbers = _.times(3, () => _.random(1, 10));
console.log(randomNumbers); 
// => [n, n, n] (three random numbers)
```

### _.uniqueId

Generate a unique ID.

```javascript
console.log(_.uniqueId('prefix_')); 
// => 'prefix_1'
console.log(_.uniqueId('prefix_')); 
// => 'prefix_2'
```

### _.isEqual

Perform a deep comparison between two values.

```javascript
const object = { 'a': 1 };
const other = { 'a': 1 };

console.log(object === other);   // => false
console.log(_.isEqual(object, other)); // => true
```

## Chaining

Lodash provides a chaining mechanism to perform multiple operations.

```javascript
// Basic chaining
const result = _([1, 2, 3, 4, 5])
  .filter(n => n % 2 === 1)    // => [1, 3, 5]
  .map(n => n * n)             // => [1, 9, 25]
  .sum()                       // => 35
  .value();                    // Execute the chain

console.log(result); // => 35

// With objects and collections
const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
];

const youngest = _
  .chain(users)
  .sortBy('age')           // Sort by age
  .map(u => u.user)        // Extract user names
  .head()                  // Get first element
  .value();                // Execute the chain

console.log(youngest); // => 'pebbles'
```

## Real-World Examples

### Data Transformation

```javascript
const data = [
  { id: 1, name: 'John', department: 'IT', salary: 50000 },
  { id: 2, name: 'Jane', department: 'HR', salary: 60000 },
  { id: 3, name: 'Bob', department: 'IT', salary: 55000 },
  { id: 4, name: 'Alice', department: 'Marketing', salary: 65000 },
  { id: 5, name: 'Charlie', department: 'IT', salary: 70000 }
];

// Group by department and calculate average salary
const departmentStats = _
  .chain(data)
  .groupBy('department')
  .map((members, dept) => ({
    department: dept,
    memberCount: members.length,
    averageSalary: _.meanBy(members, 'salary'),
    members: _.map(members, 'name')
  }))
  .value();

console.log(departmentStats);
/* =>
[
  {
    department: 'IT',
    memberCount: 3,
    averageSalary: 58333.33,
    members: ['John', 'Bob', 'Charlie']
  },
  {
    department: 'HR',
    memberCount: 1,
    averageSalary: 60000,
    members: ['Jane']
  },
  {
    department: 'Marketing',
    memberCount: 1,
    averageSalary: 65000,
    members: ['Alice']
  }
]
*/

// Find the department with the highest average salary
const highestPaidDept = _
  .chain(departmentStats)
  .maxBy('averageSalary')
  .value();

console.log(highestPaidDept.department); // => 'Marketing'
```

### Form Data Processing

```javascript
// Sample form data with potential issues
const formData = {
  username: '  john.doe  ',
  email: 'john.DOE@example.com',
  preferences: {
    notifications: 'yes',
    theme: '',
    language: undefined
  },
  interests: ['sports', '', 'music', null, 'reading']
};

// Clean and normalize form data
const cleanData = {
  // Trim and lowercase username
  username: _.trim(formData.username).toLowerCase(),
  
  // Lowercase email
  email: _.toLower(formData.email),
  
  // Use defaults for missing preferences
  preferences: _.defaults({}, 
    // Remove undefined/empty values
    _.omitBy(formData.preferences, value => 
      _.isUndefined(value) || value === ''),
    // Default values
    { notifications: 'no', theme: 'light', language: 'en' }
  ),
  
  // Remove empty/null values from interests
  interests: _.compact(formData.interests)
};

console.log(cleanData);
/* =>
{
  username: 'john.doe',
  email: 'john.doe@example.com',
  preferences: {
    notifications: 'yes',
    theme: 'light',
    language: 'en'
  },
  interests: ['sports', 'music', 'reading']
}
*/
```

## Performance Tips

1. **Import only what you need** - For production code, import specific functions to reduce bundle size:
   ```javascript
   import map from 'lodash/map';
   import filter from 'lodash/filter';
   ```

2. **Use the right tool** - For simple operations, native JavaScript methods might be faster:
   ```javascript
   // Native JS (faster for simple cases)
   const squares = [1, 2, 3].map(x => x * x);
   
   // Use Lodash for more complex cases
   const result = _.chain(collection)
     .groupBy('category')
     .mapValues(items => _.sumBy(items, 'value'))
     .value();
   ```

3. **Consider lodash/fp** - For functional programming style:
   ```javascript
   import { compose, map, filter } from 'lodash/fp';
   
   const transform = compose(
     map(x => x * x),
     filter(x => x % 2 === 0)
   );
   
   console.log(transform([1, 2, 3, 4, 5])); // => [4, 16]
   ```

---

This guide covers the most commonly used Lodash functions with practical examples. For complete documentation, visit the [Lodash documentation](https://lodash.com/docs).