import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { email, password } = req.query
  try {
    if (!email && !password) {
      return res.status(400).json({ message: '`email` required' })
    }
    const results = await query(
      `
      SELECT *
      FROM registros
      WHERE email = ? AND password = ?
      `,
      email,
      password
    )
    return res.json(results[0])
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler