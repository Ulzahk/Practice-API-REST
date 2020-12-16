const JWTAuthenticatorService = require('../services/authenticationService');
const jwtAuthenticatorService = new JWTAuthenticatorService();

module.exports = {
  headersEvaluator: async (req, res, next) =>{
    if(!req.headers || !req.header('Authorization')) {
      return res.status(401).json({error: 'There isn\'t a correct header'});
    }

    const token = req.headers.authorization;
    const decodedToken = jwtAuthenticatorService.JWTVerify(token);
    // const user = await User.findOne({id: decodedToken.user});

    // if(!user) {
    //   return next({err: 'Unauthorized'});
    // }
    // req.user = user.id;
  }
};
