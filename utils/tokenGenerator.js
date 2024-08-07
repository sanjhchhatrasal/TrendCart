
const jwt = require("jsonwebtoken");

const tokenGenerator = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET)
}
module.exports = tokenGenerator;