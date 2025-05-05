// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Part 2

// isPhoneNumber
test('testing empty phone number', () => {
  expect(isPhoneNumber("")).toBe(false);
});

test('testing different format', () => {
  expect(isPhoneNumber("(858) 534-2230")).toBe(true);
});

test('testing correct phone number', () => {
  expect(isPhoneNumber("858-534-2230")).toBe(true);
});


test('testing invalid input, correct format', () => {
  expect(isPhoneNumber("AAA-AAA-AAAA")).toBe(false);
});

// isEmail
test('testing odd, but correct email', () => {
  expect(isEmail("zyzz1223@carrots.xyz")).toBe(true);
});

test('testing minimal email', () => {
  expect(isEmail("a@a.com")).toBe(true);
});

test('testing too small email', () => {
  expect(isEmail('@.com')).toBe(false);
});

test('testing domain error', () => {
  expect(isEmail('aaa@aaa.comm')).toBe(false);
});

// isStrongPassword

test('test bare minimum', () => {
  expect(isStrongPassword('AAAA')).toBe(true);
});

test('testing maximum', () => {
  expect(isStrongPassword('A123__AAABC12AZ')).toBe(true);
});

test('testing invalid characters', () => {
  expect(isStrongPassword('A***(z)!!')).toBe(false);
});

test('testing invalid start character', () => {
  expect(isStrongPassword('1A__2312A')).toBe(false);
});


// isDate--is this regex even right.. not parsing for incorrect dates
test('testing correct with two digit', () => {
  expect(isDate('4/20/2025')).toBe(true);
});

test('testing correct with one digit', () => {
  expect(isDate('04/20/2025')).toBe(true);
});

test('testing incorrect year formatting', () => {
  expect(isDate('04/20/25')).toBe(false);
});

test('testing incorrect XX', () => {
  expect(isDate('004/30/2025')).toBe(false);
});

// isHexColor
test('testing correct with no #', () => {
  expect(isHexColor('AAA')).toBe(true);
});

test('correct with # and full', () => {
  expect(isHexColor('#c0ffee')).toBe(true);
});

test('testing invalid characters', () => {
  expect(isHexColor('#GGGZZZ')).toBe(false);
});

test('testing invalid hex code', () => {
  expect(isHexColor('#AAA1234')).toBe(false);
});