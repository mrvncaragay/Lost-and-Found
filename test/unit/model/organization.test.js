require('dotenv').config();
process.env.LOCALDB = process.env.TESTDB;
const Organization = require('../../../model/organization');
const mongoose = require('mongoose');

describe('Property', () => {
  let orgProp;
  let propertyCode;
  let name;
  let address;

  beforeEach(() => {
    name = 'RWHG';
    propertyCode = 'VALID';
    address = '1234 Hk drive';

    orgProp = new Organization({ name, address, propertyCode });
  });

  afterAll(async done => {
    await mongoose.disconnect();
    done();
  });

  it('should be invalid if propertyCode is empty', () => {
    orgProp.propertyCode = '';

    const err = orgProp.validateSync();
    expect(err.errors.propertyCode).toBeTruthy();
    expect(err.errors.propertyCode.message).toBe('Path `propertyCode` is required.');
  });

  it('should be invalid if propertyCode is less than 3 characters', () => {
    orgProp.propertyCode = 'fa';

    const err = orgProp.validateSync();
    expect(err.errors.propertyCode).toBeTruthy();
    expect(err.errors.propertyCode.message).toBe('must be greater than 3 characters.');
  });

  it('should be invalid if propertyCode is more than 10 characters', () => {
    orgProp.propertyCode = 'fadaddq21adas';

    const err = orgProp.validateSync();
    expect(err.errors.propertyCode).toBeTruthy();
    expect(err.errors.propertyCode.message).toBe('must be less than 10 characters.');
  });

  it('should be invalid if name is empty', () => {
    orgProp.name = '';

    const err = orgProp.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('Path `name` is required.');
  });

  it('should be invalid if name is less than 10 characters', () => {
    orgProp.name = 'asdas';

    const err = orgProp.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('must be greater than 10 characters.');
  });

  it('should be invalid if name is less than 100 characters', () => {
    orgProp.name = new Array(103).join('a');

    const err = orgProp.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('must be less than 100 characters.');
  });

  it('should be invalid if address is empty', () => {
    orgProp.address = '';

    const err = orgProp.validateSync();
    expect(err.errors.address).toBeTruthy();
    expect(err.errors.address.message).toBe('Path `address` is required.');
  });

  it('should be invalid if address is less than 10 characters', () => {
    orgProp.address = 'asdas';

    const err = orgProp.validateSync();
    expect(err.errors.address).toBeTruthy();
    expect(err.errors.address.message).toBe('must be greater than 10 characters.');
  });

  it('should be invalid if address is less than 100 characters', () => {
    orgProp.address = new Array(103).join('a');

    const err = orgProp.validateSync();
    expect(err.errors.address).toBeTruthy();
    expect(err.errors.address.message).toBe('must be less than 100 characters.');
  });
});
