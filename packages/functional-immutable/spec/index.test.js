import Immutable, { List } from 'immutable';
import fp from 'lodash/fp';
import * as fi from '../src/index';

describe('List', () => {
  // Custom tests
  test('isList', () => {
    expect(List.isList([])).toBe(false);
    expect(List.isList(List())).toBe(true);
  });
  test('of', () => {
    expect(List.of(1, 2, 3, 4)).toEqual(List([1, 2, 3, 4]));
    expect(List.of({ x: 1 }, 2, [3], 4)).toEqual(List([{ x: 1 }, 2, [3], 4]));
  });
  test('fromJS', () => {
    expect(List.of(1, 2, 3, 4)).toEqual(fi.fromJS([1, 2, 3, 4]));
    expect(Immutable.fromJS([{ x: 1 }, 2, [3], 4])).toEqual(fi.fromJS([{ x: 1 }, 2, [3], 4]));
  });
  // immutable-js tests rewritten
  it('of provides initial values', () => {
    const v = List.of('a', 'b', 'c');
    expect(fi.get(0)(v)).toBe('a');
    expect(fi.get(1)(v)).toBe('b');
    expect(fi.get(2)(v)).toBe('c');
  });

  it('should fail gracefully on non-immutable data', () => {
    expect(fi.get(32)()).toBeUndefined();
    expect(fi.get(32)(null)).toBeUndefined();
    expect(fi.get(32)({})).toBeUndefined();
    expect(fi.get(32)('foobar')).toBeUndefined();
  });

  it('should fail chain on non-immutable data', () => {
    expect(
      fp.flow(
        fi.get(32),
        fi.getIn(['a', 'b', 'c']),
      )(),
    ).toBeUndefined();
    expect(
      fp.flow(
        fi.get(32),
        fi.getIn(['a', 'b', 'c']),
      )(null),
    ).toBeUndefined();
    expect(
      fp.flow(
        fi.get(32),
        fi.getIn(['a', 'b', 'c']),
      )({}),
    ).toBeUndefined();
    expect(
      fp.flow(
        fi.get(32),
        fi.getIn(['a', 'b', 'c']),
      )('foobar'),
    ).toBeUndefined();
  });

  it('toArray provides a JS array', () => {
    const v = List.of('a', 'b', 'c');
    expect(fi.toArray()(v)).toEqual(['a', 'b', 'c']);
  });

  it('can set and get a value', () => {
    let v = List();
    expect(fi.get(0)(v)).toBe(undefined);
    v = fi.set(0, 'value')(v);
    expect(fi.get(0)(v)).toBe('value');
  });

  it('returns undefined when getting a null value', () => {
    const v = List([1, 2, 3]);
    expect(fi.get(null)(v)).toBe(undefined);

    const o = List([{ a: 1 }, { b: 2 }, { c: 3 }]);
    expect(fi.get(null)(o)).toBe(undefined);
  });

  it('counts from the end of the fi on negative index', () => {
    const i = List.of(1, 2, 3, 4, 5, 6, 7);
    expect(fi.get(-1)(i)).toBe(7);
    expect(fi.get(-5)(i)).toBe(3);
    expect(fi.get(-9)(i)).toBe(undefined);
    expect(fi.get(-999, 1000)(i)).toBe(1000);
  });

  it('coerces numeric-string keys', () => {
    // Of course, TypeScript protects us from this, so cast to "any" to test.
    const i = List.of(1, 2, 3, 4, 5, 6);
    expect(fi.get('1')(i)).toBe(2);
    expect(
      fp.flow(
        fi.set('3', 10),
        fi.get('3'),
      )(i),
    ).toBe(10);
    // Like array, string negative numbers do not qualify
    expect(fi.get('-1')(i)).toBe(undefined);
    // Like array, string floating point numbers do not qualify
    expect(fi.get('1.0')(i)).toBe(undefined);
  });
});
