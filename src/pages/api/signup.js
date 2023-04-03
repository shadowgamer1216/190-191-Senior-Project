import { createUser, findUser } from '../../lib/user'

export default async function signup(req, res) {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.method === 'OPTIONS') {
    // Set CORS headers for preflight requests
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Max-Age', '3600')
    res.status(204).end()
    return
  }

  const { username, password, viewOnly } = req.body;

  try {
    const existingUser = await findUser({ username });
    if (existingUser.length > 0) {
      return res.status(409).json({ message: 'Username already exists' });
    }
    if (username.length === 0) {
      return res.status(409).json({ message: 'Username cannot be blank' });
    }

  console.log("viewOnly", req.body)
    await createUser({username, password, viewOnly})
    res.status(200).send({ done: true })
  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }
}


