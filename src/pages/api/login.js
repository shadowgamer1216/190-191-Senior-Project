import passport from 'passport'
import nextConnect from 'next-connect'
import { localStrategy } from '../../lib/password-local'
import { setLoginSession } from '../../lib/auth'
import cors from 'cors'

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res, () => {} , { password: req.body.password })
  })

passport.use(localStrategy)

export default nextConnect()
  .use(cors())
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      const user = await authenticate('local', req, res)
      // session is the payload to save in the token, it may contain basic info about the user
      const session = {...user}; 
      console.log("session user: " + session[0].username)
      console.log("res " + res.statusCode)




      await setLoginSession(res, session)

      res.status(200).send({ done: true })
    } catch (error) {
      console.error("I am the error " + error) 
      res.status(401).send(error.message)
    }
  })