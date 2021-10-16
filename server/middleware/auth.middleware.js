const jwt = require('jsonwebtoken')
require('dotenv').config();



module.exports = (req, res, next) => {
  if(req.method === 'OPTIONS'){
    return ext()
  }
  try{
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
      res.status(401).json({message: 'ошибка авторизации'})
    }
    const decoded = jwt.verify(token, process.env.SECRETKEY)
    req.user = decoded
    next()
  }
  catch(e){
    res.status(401).json({message: 'ошибка авторизации'})
  }
}
