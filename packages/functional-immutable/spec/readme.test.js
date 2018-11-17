import fp from 'lodash/fp';
import Immutable from 'immutable';
import { createSelector } from 'reselect';
import R from 'ramda';
import * as fi from '../src/index';

const immutableObject = Immutable.fromJS({
  user: {
    lastName: 'Skywalker',
  },
});

describe('With Fp', () => {
  const getFpUppercaseLastName = fp.flow(
    fi.getIn(['user', 'lastName']),
    fp.defaultTo('Doe'),
    fp.toUpper,
  );

  it('Should return uppercase Name', () => {
    expect(getFpUppercaseLastName(immutableObject)).toEqual('SKYWALKER');
  });
  it('Should default to DOE', () => {
    expect(getFpUppercaseLastName()).toEqual('DOE');
  });
});

describe('With Ramda', () => {
  const getRUppercaseLastName = R.compose(
    R.toUpper,
    R.defaultTo('Doe'),
    fi.getIn(['user', 'lastName']),
  );

  it('Should return uppercase Name', () => {
    expect(getRUppercaseLastName(immutableObject)).toEqual('SKYWALKER');
  });
  it('Should default to DOE', () => {
    expect(getRUppercaseLastName()).toEqual('DOE');
  });
});

describe('With reselect', () => {
  const getSelectorUppercaseLastName = createSelector(
    fp.flow(
      fi.getIn(['user', 'lastName']),
      fp.defaultTo('Doe'),
    ),
    fp.toUpper,
  );

  it('Should return uppercase Name', () => {
    expect(getSelectorUppercaseLastName(immutableObject)).toEqual('SKYWALKER');
  });
  it('Should default to DOE', () => {
    expect(getSelectorUppercaseLastName()).toEqual('DOE');
  });
});
