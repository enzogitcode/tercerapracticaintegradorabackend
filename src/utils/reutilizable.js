const customResponse = (res, status, message) => {
    res.status(status).json({ message })
}