const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (db) => {
  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                             Controller logic
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  // const userProfile = (req, res) => {
  //
  //   db.account.userProfile(req.params.id, (error, queryResult) => {
  //
  //       if (error) {
  //           console.log("ERROR QUERYING DB: ". error.message);
  //           response.sendStatus(500);
  //       }
  //       console.log('queryResultttttt: ', queryResult);
  //       res.render('/account/UserAccount', {user: queryResult});
  //   });
  // };

  const logOut = (req, res) => {
        res.clearCookie('loginStatus');
        res.clearCookie('userId');
        res.clearCookie('name');
        res.redirect('/');
  };

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
                console.log('queryResultttttt: ', queryResult);
                res.render('./account/UserAccount', {user: queryResult.name});
                //let url = '/account/' + queryResult.id;
                //res.redirect(url);
            }

            else {
                res.cookie('wrongLogin', true);
                //res.send('Failed');
                res.redirect('/login');
            }
          };
        });
  };

  return {
    // userProfile,
    logOut,
    checkUser
  };
};
