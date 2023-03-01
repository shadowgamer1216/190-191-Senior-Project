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
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const sequelize = new Sequelize(
    'absolutemedia',
    'root',
    'password1!',
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


function dbpush (sequelize, Sequelize) {

    var User = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        username: {
            type: Sequelize.TEXT
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

    });

    return User;

}

"use strict";




fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;


const users = []

export async function createUser({ username, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
  }

  // This is an in memory store for users, there is no data persistence without a proper DB
  users.push(user)

  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  return users.find((user) => user.username === username)
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}