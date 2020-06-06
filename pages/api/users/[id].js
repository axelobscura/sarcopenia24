export default (req, res) => {
    const { query: { id } } = req
    const user = await getUserById(id)
    if (!user) {
        return res.status(404).json({
            status: 404,
            message: 'Not Found'
        })
    }
    return res.json({ user })
}