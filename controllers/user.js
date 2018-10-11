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

        //console.log('Create query: ', queryResult);
        if (queryResult === undefined) {
            res.clearCookie('userTaken');
            //console.log('User created successfully.');
            res.redirect('/user');
        } else {
            res.cookie('userTaken', true);
            //console.log('User name exists.');
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

    console.log('U WANT TO PASS THIS?', name);
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
