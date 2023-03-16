import Local from 'passport-local'
import { findUser, validatePassword } from './user'

export const localStrategy = new Local.Strategy(function (
  username,
  password,
  done
) {
 
if (username != undefined){
  const user = findUser({ username })
    .then((user) => {


      if (user && validatePassword(user, password)) {

        done(null, user)
      } else {

        done(new Error('Invalid username and password combination'))
      }
    })
    .catch((error) => {

      done(error)
    })
  }
})