
const checkUser = (req, res, next) => {
  if(req.session.user){
      return next()
  }else{
      return  res.redirect('/')
  }
}

module.exports = {
  checkUser
}
