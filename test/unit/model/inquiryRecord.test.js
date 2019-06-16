require('dotenv').config();
process.env.LOCALDB = process.env.TESTDB;
const InquiryRecord = require('../../../model/inquiryRecord');
const mongoose = require('mongoose');

describe('Property', () => {
  let incProp;
  let name;
  let email;
  let description;
  let phone;

  beforeEach(() => {
    name = 'Mark';
    description = 'Alarm clock that was left yesterday';
    email = 'test1@yahoo.com';
    phone = '1234567890';
    incProp = new InquiryRecord({ name, description, phone, email });
  });

  afterAll(async done => {
    await mongoose.disconnect();
    done();
  });

  it('should be invalid if name is empty', () => {
    incProp.name = '';

    const err = incProp.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('Path `name` is required.');
  });

  it('should be invalid if description is empty', () => {
    incProp.description = '';

    const err = incProp.validateSync();
    expect(err.errors.description).toBeTruthy();
    expect(err.errors.description.message).toBe('Path `description` is required.');
  });

  it('should be invalid if phone is empty', () => {
    incProp.phone = '';

    const err = incProp.validateSync();
    expect(err.errors.phone).toBeTruthy();
    expect(err.errors.phone.message).toBe('Path `phone` is required.');
  });
});
