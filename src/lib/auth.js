import Iron from '@hapi/iron'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies'

const TOKEN_SECRET = process.env.TOKEN_SECRET

export async function setLoginSession(res, session) {

  const createdAt = Date.now()
  // Create a session object with a max age that we can validate later
  const obj = { ...session, createdAt, maxAge: MAX_AGE }
  console.log("TOKEN_SECRET:", TOKEN_SECRET);

  const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults)
  console.log("session res " + res.status)

  setTokenCookie(res, token)
}

export async function getLoginSession(req) {
  const token = getTokenCookie(req)

  if (!token) return

  const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
  const expiresAt = session.createdAt + session.maxAge * 1000

  // Validate the expiration date of the session
  if (Date.now() > expiresAt) {
    throw new Error('Session expired')
  }

  return session
}

export async function getUser(req) {
  const session = await getLoginSession(req);

  if (session) {
    return { user: session.user };
  } else {
    return { user: null };
  }
}