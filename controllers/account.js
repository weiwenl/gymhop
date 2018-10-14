const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (db) => {
  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                             Controller logic
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  const newPassword = (req, res) => {
    let name = req.cookies['name'];
    console.log(name);
    db.user.newPassword(req.body, name, (error, queryResult) => {
        if (error) {
          console.error('ERROR CHANGING OLD PASSWORD: ', error);
          res.sendStatus(500);
        }

        res.clearCookie('wrongLogin');
        res.clearCookie('name');
        res.redirect('/account/login');
    });
  };

  const resetPassword = (req, res) => {
    res.clearCookie('wrongLogin');
    res.render('./web/AccountReset', {cookie: req.cookies['name']});
  };

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
          res.cookie('name', req.body.name);
            //If no error do these: queryResult exists and password is correct
            if (queryResult !== undefined && sha256(SALT + req.body.password) === queryResult.password) {
                res.cookie('loginStatus', sha256(SALT + 'logged in'));
                res.clearCookie('wrongLogin');
                res.cookie('name', queryResult.name);
                res.cookie('userId', queryResult.id);
                //res.redirect('./account/user', {user: queryResult.name});
                res.render('./user/UserAccount', {user: queryResult.name});
            }

            else {
                res.cookie('wrongLogin', true);
                //res.render('./web/AccountLogin');
                res.redirect('/account/login');

            }
          };
        });
  };

  const createUser = (req,res) => {
    // use user model method `create` to create new user entry in db
      db.user.createUser(req.body, (error, queryResult) => {

        if (error) {
          console.error('ERROR CREATING USER: ', error);
          res.sendStatus(500);
        }

        if (queryResult === undefined) {
            res.clearCookie('userTaken');

            res.redirect('/account/login');
        } else {
            res.cookie('userTaken', true);

            res.redirect('/account/new');
        }
      });
  };

  const loginUser = (req, res) => {
     res.render('./web/AccountLogin', {cookie: req.cookies['wrongLogin']});
  };

  return {
    newPassword,
    resetPassword,
    logOut,
    checkUser,
    createUser,
    loginUser
  };
};
