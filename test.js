
'use strict';

// Modules
const test = require('ava');
const toFingerprint = require('./');

// Helpers
const compare = (t, actual, expected) => t.is(actual.trim(), expected.trim());

// Test
test('toFingerprint(Marc `O Polo)', (t) => {
  const input = 'Marc `O Polo';
  const fingerprint = toFingerprint(input);

  compare(t, fingerprint, 'marc o polo');
});

test('toFingerprint(Marc \'O Polo)', (t) => {
  const input = 'Marc \'O Polo';
  const fingerprint = toFingerprint(input);

  compare(t, fingerprint, 'marc o polo');
});

test('toFingerprint(Marc ’O Polo)', (t) => {
  const input = 'Marc ’O Polo';
  const fingerprint = toFingerprint(input);

  compare(t, fingerprint, 'marc o polo');
});
