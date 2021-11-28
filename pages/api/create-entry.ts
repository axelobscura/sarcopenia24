import { NextApiHandler } from 'next';
import { query } from '../../lib/db';

const handler: NextApiHandler = async (req, res) => {
    const { elusuario, elmensaje } = req.body
    try {
        if (!elusuario || !elmensaje) {
            return res
                .status(400)
                .json({ message: '`usuario` and `mensaje` are both required' })
        }
        const results = await query(
            `
            INSERT INTO chat_congreso2021 (nombre, mensaje)
            VALUES (?, ?)
            `,
            [elusuario, elmensaje]
        )

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default handler