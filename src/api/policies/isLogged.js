const JWTAuthenticationService = require('../services/authenticationService');
const jwtAuthenticationService = new JWTAuthenticationService();

module.exports = {
  headersEvaluator: async (req, res, next) =>{
    if(!req.headers || !req.header('Authorization')) {
      return res.status(401).json({error: 'There isn\'t a correct header'});
    }
    // const token = req.header('Authorization');
    // const decodedToken = jwtAuthenticationService.JWTVerify(token);
    // // const user = await User.findOne({id: decodedToken.user});

    // // if(!user) {
    // //   return next({err: 'Unauthorized'});
    // // }
    // // req.user = user.id;
  }
};
