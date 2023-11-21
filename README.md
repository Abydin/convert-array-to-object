# convert-array-to-object

<!-- [![npm version](https://badge.fury.io/js/convert-array-to-object.svg)](https://badge.fury.io/js/convert-array-to-object) -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Effortlessly convert arrays into structured JavaScript objects with the `convert-array-to-object` npm package. This lightweight utility simplifies the process of transforming arrays into key-value paired objects, enhancing your data manipulation tasks.

## Installation

install with Npm

```bash
npm install convert-array-to-object
```

install with Yarn

```bash
yarn add convert-array-to-object
```

## Usage

Here are some examples of how to use the `convertArrToObj` function:

## Usage

```javascript
const convertArrToObj = require("convert-arr-to-obj");

// Example usage:
const inputArray = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Jane" },
	{ id: 3, name: "Doe" },
];

// Without reArr option
const outputObject = convertArrToObj({
	arr: inputArray,
	callBack: (item) => item.name,
	key: "id",
});

console.log(outputObject);
// Output: { '1': 'John', '2': 'Jane', '3': 'Doe' }

// With reArr option
const outputArray = convertArrToObj({
	arr: inputArray,
	callBack: (item) => item.name,
	key: "id",
	reArr: true,
});

console.log(outputArray);
// Output: [ 'John', 'Jane', 'Doe' ]
```

## API

### `convertArrToObj(options)`

#### Parameters

- `options` (Object):
  - `arr` (Array): The input array of objects.
  - `callBack` (Function, optional): A callback function to transform each item in the array.
  - `key` (String): The key to use as the property in the resulting object or array.
  - `reArr` (Boolean, optional): If set to `true`, the function returns an array of values instead of an object.

#### Returns

- If `reArr` is `false` (default): Returns an object where keys are taken from the specified `key` and values are the result of the optional `callBack` function.
- If `reArr` is `true`: Returns an array of values derived from the specified `key` and optional `callBack` function.

### Examples

#### Basic Usage

```javascript
const inputArray = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Jane" },
	{ id: 3, name: "Doe" },
];

const outputObject = convertArrToObj({
	arr: inputArray,
	key: "id",
});

console.log(outputObject);
// Output: { '1': { id: 1, name: 'John' }, '2': { id: 2, name: 'Jane' }, '3': { id: 3, name: 'Doe' } }
```

### Transforming Values with Callback

You can use the `callBack` option to transform values during the conversion process. The `callBack` function takes each item in the array as its argument and should return the transformed value.

#### Example

```javascript
const inputArray = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Jane" },
	{ id: 3, name: "Doe" },
];

const outputObject = convertArrToObj({
	arr: inputArray,
	key: "id",
	callBack: (item) => item.name.toUpperCase(),
});

console.log(outputObject);
// Output: { '1': 'JOHN', '2': 'JANE', '3': 'DOE' }
```

### Using reArr Option

The `reArr` option allows you to control the output format. When set to `true`, the function returns an array of values instead of an object.

#### Example

Consider an array of user objects:

```javascript
const users = [
	{ id: 1, name: "John", age: 25 },
	{ id: 2, name: "Jane", age: 30 },
	{ id: 3, name: "Doe", age: 22 },
];
const userNamesArray = convertArrToObj({
	arr: users,
	key: "id",
	callBack: (user) => user.name,
	reArr: true,
});

console.log(userNamesArray);
// Output: [ 'John', 'Jane', 'Doe' ]
```

## Keywords

- `convert-arr-to-obj`
- `array conversion`
- `object transformation`
- `data manipulation`
- `JavaScript utility`
- `array to object mapping`
- `array manipulation`
- `callback function`
- `key-based transformation`
- `data processing`
- `array transformation`
- `utility function`
- `data structure conversion`

## Contributing

We welcome contributions to this project. If you have a feature request, bug report, or want to improve documentation, please feel free to open an issue or submit a pull request.

### Contribution Guidelines

1. Fork the repository.
2. Create a new branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push your changes to the branch: `git push origin <branch_name>`.
5. Submit a pull request.

### License

This project is licensed under the MIT License.
