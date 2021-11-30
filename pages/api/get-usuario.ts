import { NextApiHandler } from 'next'
import { querydos } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email) {
      return res
        .status(400)
        .json({ message: '`usuario` and `password` are both required' })
    }
    const results = await querydos(
      `
      SELECT * FROM registros_congreso2021
      WHERE email = ?
      LIMIT 1
      `,
      email,
    )
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }

}

export default handler