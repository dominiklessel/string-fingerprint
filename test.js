
// Modules
const test = require('ava');
const toFingerprint = require('./');

// Helpers
const compare = (t, actual, expected) => t.is(actual.trim(), expected.trim());

// Test strings
const testStrings = {
  'Marc `O Polo': 'marc o polo',
  'Marc \'O Polo': 'marc o polo',
  'Marc ’O Polo': 'marc o polo',
  'K•Swiss': 'kswiss',
  'Rudolf Scheer & Söhne': 'rudolf scheer sohne',
  'Donic-Schildkröt': 'donicschildkrot',
  'Ambré': 'ambre',
  'CAFèNOIR': 'cafe noir',
};

// Tests
Object
  .keys(testStrings)
  .forEach((str) => test(str, (t) => compare(t, toFingerprint(str), testStrings[str])));
