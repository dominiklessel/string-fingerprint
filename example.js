
'use strict';

const toFingerprint = require('./');

const str = 'áé';
const strFingerprint = toFingerprint(str);

console.log(strFingerprint);
// => ae
