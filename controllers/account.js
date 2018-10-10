const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (db) => {
  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                             Controller logic
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  const checkUser = (req, res) => {
        db.account.checkUser(req.body, (error, queryResult) => {
        if (error) {
            console.log('ERROR AUTHENTICATING USER: ', error);
            res.sendStatus(500);
        } else {
          //console.log("CHECK:",queryResult);
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

  //   db.user.showProfile(request.params.id, request.cookies['userId'], (error, queryResult) => {
  //
  //       if (error) {
  //           console.log("error showing profile: ". error.message);
  //           response.sendStatus(500);
  //       }
  //
  //       let cookies = {
  //
  //           check: sha256(SALT + "logged in"),
  //           loginStatus: request.cookies['loginStatus'],
  //           username: request.cookies['username'],
  //           userId: request.cookies['userId']
  //       };
  //
  //       response.render('user/profile', {user: queryResult, cookie: cookies});
  //   });
  // };
  //      res.render('/account/UserAccount');
    };

  const logOut = (req, res) => {
        res.clearCookie('loginStatus');
        res.clearCookie('userId');
        res.clearCookie('name');
        res.redirect('/');
  };

  return {
    logOut,
    userAccount,
    checkUser
  };
};
