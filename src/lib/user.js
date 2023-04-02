import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'

const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require('cors');
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var db = {};
const sequelize = new Sequelize(
    'absolutemedia',
    'root',
    'password',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );
   sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

    var User = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        createdAt: {
          type: Sequelize.DATE
        },

        username: {
            type: Sequelize.TEXT
        },

        hash: {
            type: Sequelize.STRING
        },
        salt: {
          type: Sequelize.STRING,
          allowNull: false
          
      }

    });

    (async () => {
      await User.sync()
      .then(function () {
        console.log('Nice! Database looks fine')
    }).catch(function (err) {
        console.log(err, "Something went wrong with the Database Update!")
});
 })();




//const users = [user]

export async function createUser({ username, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = await User.create({
    createdAt: Date.now(),
    username,
    hash,
    salt,
  });

  // This is an in memory store for users, there is no data persistence without a proper DB
  

  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  console.log("Username: ", username);
  const users = await User.findAll({ where: { username: username } });
  return users;
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(users, inputPassword) {
  console.log('Validating password for user:', users[0].username);
  console.log('Input password:', inputPassword);
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, users[0].salt, 1000, 64, 'sha512')
    .toString('hex')

  const passwordsMatch = users[0].hash === inputHash
  console.log("match: " + passwordsMatch)
  return passwordsMatch
}
