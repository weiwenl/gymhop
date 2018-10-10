const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (db) => {
  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                             Controller logic
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  const checkUser = (req, res) => {
    console.log('WORKS');
        db.account.checkUser(req.body, (error, queryResult) => {
          console.log('WORKS x2');
        if (error) {
            console.log('ERROR AUTHENTICATING USER: ', error);
            res.sendStatus(500);
        } else {
          console.log("CHECK:",queryResult);
            //If no error do these: queryResult exists and password is correct
            if (queryResult !== undefined && sha256(SALT + req.body.password) === queryResult.password) {
                res.cookie('loginStatus', sha256(SALT + 'logged in'));
                res.clearCookie('wrongLogin');
                res.cookie('name', queryResult.name);
                res.cookie('userId', queryResult.id);
                let url = '/account' + res.cookie.userId;
                res.redirect(url);
            }

            else {
                res.cookie('wrongLogin', true);
                //res.send('Failed');
                res.redirect('/login');
            }
          };
        });
  };
  const userAccount = (req, res) => {
     res.render('/account/UserAccount');
  };
  return {
    checkUser
  };
};
