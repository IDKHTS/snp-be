'use strict'

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    password: STRING(255),
    email: STRING(255),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE
  })

  return User
}
