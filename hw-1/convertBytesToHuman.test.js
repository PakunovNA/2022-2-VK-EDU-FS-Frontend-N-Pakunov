/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman([2048])).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5.00 B')
  expect(convertBytesToHuman(1024)).toBe('1.00 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(12312312342)).toBe('11.47 GB')
  expect(convertBytesToHuman(1231231234213)).toBe('1.12 TB')
});

test('Не возвращает конвертирование для аргумента неправильного типа и класса', () => {
  expect(convertBytesToHuman(-1)).not.toBe('1.00 B')
  expect(convertBytesToHuman('1024')).not.toBe('1.00 KB')
  expect(convertBytesToHuman([123123123])).not.toBe('117.42 MB')
});

