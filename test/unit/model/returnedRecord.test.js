require('dotenv').config();
process.env.LOCALDB = process.env.TESTDB;
const ReturnedRecord = require('../../../model/returnedRecord');
const mongoose = require('mongoose');

describe('Property', () => {
  let rtProp;
  let collectedBy;
  let releasedBy;

  beforeEach(() => {
    collectedBy = 'Mark Sac';
    releasedBy = 'Eric';
    rtProp = new ReturnedRecord({ collectedBy, releasedBy });
  });

  afterAll(async done => {
    await mongoose.disconnect();
    done();
  });

  it('should be invalid if collectedBy is empty', () => {
    rtProp.collectedBy = '';

    const err = rtProp.validateSync();
    expect(err.errors.collectedBy).toBeTruthy();
    expect(err.errors.collectedBy.message).toBe('Path `collectedBy` is required.');
  });

  it('should be invalid if description is empty', () => {
    rtProp.releasedBy = '';

    const err = rtProp.validateSync();
    expect(err.errors.releasedBy).toBeTruthy();
    expect(err.errors.releasedBy.message).toBe('Path `releasedBy` is required.');
  });
});
