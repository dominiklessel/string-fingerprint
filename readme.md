# string-fingerprint
> Creates a string fringerprint

[![CircleCI](https://circleci.com/gh/dominiklessel/string-fingerprint.svg?style=svg)](https://circleci.com/gh/dominiklessel/string-fingerprint)

## Install

```
$ npm install string-fingerprint
```

## Usage

```js

const toFingerprint = require('./');

const str = 'áé';
const strFingerprint = toFingerprint(str);

console.log(strFingerprint);
/* ae */


```

## Related

- [string-fingerprint-cli](https://github.com/dominiklessel/string-fingerprint-cli) - CLI for this module


## License

MIT © [Dominik Lessel](https://mifitto.com)
