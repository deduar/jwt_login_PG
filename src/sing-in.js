const { userSchema, userModel } = require('./models/user');

const userValidate = userSchema;

const userData = userModel
userData.email = 'test@test.com';
userData.password = 'test';

module.exports = { userValidate, userData };