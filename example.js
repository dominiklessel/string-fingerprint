
// Modules
const toFingerprint = require('./');

// Examples
const str = 'áé';
const str2 = 'á é';
const str3 = 'á é';
const strFingerprint = toFingerprint(str);
const strFingerprint2 = toFingerprint(str2);
const strFingerprint3 = toFingerprint(str3, { joinSeparator: '-' });

console.log(strFingerprint);
// => 'ae'

console.log(strFingerprint2);
// => 'a e'

console.log(strFingerprint3);
// => 'a-e'
