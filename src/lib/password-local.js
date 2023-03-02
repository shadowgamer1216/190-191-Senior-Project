import Local from 'passport-local'
import { findUser, validatePassword } from './user'

export const localStrategy = new Local.Strategy(function (
  username,
  password,
  done
) {
  console.log('strat username:', username)
  console.log('strat password:', password)

  const user = findUser({ username })
    .then((user) => {


      if (user && validatePassword(user, password)) {

        done(null, user[0])
      } else {

        done(new Error('Invalid username and password combination'))
      }
    })
    .catch((error) => {

      done(error)
    })
})