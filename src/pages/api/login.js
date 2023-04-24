
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
  // Define the serialize and deserialize functions
passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})
  
  export default nextConnect()
    .use(cors())
    .use(passport.initialize())
    .options(cors())
    .post(async (req, res) => {
      try {
        const user = await authenticate('local', req, res)
        // session is the payload to save in the token, it may contain basic info about the user
        const session = {...user}; 
        
        console.log("session user: " + session[0].viewOnly)
        console.log("res " + res.statusCode)

        passport.serializeUser((session, done) => {
          done(null, session)
        })
  
        await setLoginSession(res, session)
        const sessionView = session[0].viewOnly
  
        res.status(200).send({ done: true, sessionView })
      } catch (error) {
        console.error(error) 
        res.status(401).send(error.message)
      }
    })
  