import { getLoginSession } from '../../lib/auth'
import { findUser } from '../../lib/user'

export default async function user(req, res) {
  try {
    const session = await getLoginSession(req)
    const user = (session && (await findUser(session))) ?? null
    const viewOnly = user ? user.viewOnly === 'viewOnly' : false


    res.status(200).json({ user, viewOnly })
  } catch (error) {
    console.error(error)
    res.status(500).end('Authentication token is invalid, please log in')
  }
}