function emailSender(req, res, next) {
    console.log("Email sending Middleware : executing...")
    next()
}

module.exports = emailSender