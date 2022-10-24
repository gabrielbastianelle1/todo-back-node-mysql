const jwt = require('jsonwebtoken')

exports.createTokenJWT=(user)=>{

    const payload={
        id: user
    }

    const token=jwt.sign(payload,process.env.key_jwt)
    return token
}