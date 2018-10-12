const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (db) => {
  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                             Controller logic
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  const getMain = (req, res) => {
     res.render('website/SiteMain');
  };

  const getUser = (req, res) => {
     res.render('user/UserMain');
  };

  const newUser = (req, res) => {
     res.render('user/UserNew', {cookie: req.cookies['userTaken']});
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

            res.redirect('/user');
        } else {
            res.cookie('userTaken', true);

            res.redirect('/user/new');
        }
      });
  };

  const loginUser = (req, res) => {
     res.render('./user/UserLogin', {cookie: req.cookies['wrongLogin']});
  };

  const resetPassword = (req, res) => {
    res.render('./user/UserReset', {cookie: req.cookies['name']});
  };

  const newPassword = (req, res) => {
    let name = req.cookies['name'];

    db.user.newPassword(req.body, name, (error, queryResult) => {
        if (error) {
          console.error('ERROR CHANGING OLD PASSWORD: ', error);
          res.sendStatus(500);
        }

        res.clearCookie('wrongLogin');
        res.clearCookie('name');
        res.redirect('/login');
    });
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                      Export controller functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
    newPassword,
    resetPassword,
    loginUser,
    createUser,
    newUser,
    getUser,
    getMain
  };
};
