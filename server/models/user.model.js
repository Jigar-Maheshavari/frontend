// models/user.js

class User {
  constructor({ id, username, email, password }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Static method to create a User instance from a database result
  static fromDatabaseResult(result) {
    if (!result) return null;

    return new User({
      id: result.id,
      username: result.username,
      email: result.email,
      password: result.password,
    });
  }
}

module.exports = User;
