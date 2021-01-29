function authenticate(req, res, next)  {
    console.log("Authentication Middleware : executing...")
    next()
}

module.exports = authenticate