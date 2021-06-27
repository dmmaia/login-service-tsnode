var jwt = require('jsonwebtoken');

interface Payload {
    _id: string,
    login: string
}

function jwtSign(payload:Payload){
    return jwt.sign(payload, 'shhhhh');
}

export {jwtSign}