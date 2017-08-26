
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
  'KENDALL + KYLIE': 'kendall kylie',
  'MOA - Master of Arts': 'arts master moa of',
};

const testStringsMinusJoinSeparator = {
  'Marc `O Polo': 'marc-o-polo',
  'Marc \'O Polo': 'marc-o-polo',
  'Marc ’O Polo': 'marc-o-polo',
  'K•Swiss': 'kswiss',
  'Rudolf Scheer & Söhne': 'rudolf-scheer-sohne',
  'Donic-Schildkröt': 'donicschildkrot',
  'Ambré': 'ambre',
  'CAFèNOIR': 'cafe-noir',
  'KENDALL + KYLIE': 'kendall-kylie',
  'MOA - Master of Arts': 'arts-master-moa-of',
};

// Tests
Object
  .keys(testStrings)
  .forEach((key) => {
    const testName = `${key} => ${testStrings[key]}`;
    const expected = testStrings[key];

    test(testName, (t) => compare(t, toFingerprint(key), expected));
  });

// Tests -> minus delimiter
Object
  .keys(testStringsMinusJoinSeparator)
  .forEach((key) => {
    const testName = `${key} => ${testStringsMinusJoinSeparator[key]}`;
    const expected = testStringsMinusJoinSeparator[key];

    test(testName, (t) => compare(t, toFingerprint(key, { joinSeparator: '-' }), expected));
  });
