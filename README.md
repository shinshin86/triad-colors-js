# triad-colors-js

It's a npm library of get triad colors.

## Install

```bash
npm install triad-colors
# or
yarn add triad-colors
```

## Usage

Example of get random colors.

```javascript
const { getRandomColors } = require('triad-colors');

(async () => {
  console.log(getRandomColors());
})();
```

Example of specify colors.

```javascript
const { getColors } = require('triad-colors');

(async () => {
  console.log(getColors('#123123'));
})();
```

## Development

Test

```bash
npm run test
```

Code format

```bash
npm run fmt
```
