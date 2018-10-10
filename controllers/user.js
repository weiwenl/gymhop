const sha256 = require('sha256');
const alert = require('alert-node');
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
     //if(req.cookie.feedback !== undefined){
       //var feedback = req.cookies.feedback;
       //res.render('user/UserNew', feedback)
     //}
     res.render('user/UserNew', {cookie: req.cookies['userTaken']});
  };

  const createUser = (req,res) => {
    // use user model method `create` to create new user entry in db
      db.user.createUser(req.body, (error, queryResult) => {

        if (error) {
          console.error('ERROR CREATING USER: ', error);
          res.sendStatus(500);
        }

        console.log('Create query: ', queryResult);
        if (queryResult === undefined) {
            res.clearCookie('userTaken');
            //res.clearCookie('feedback');
            console.log('User created successfully.');
            res.redirect('/user');
        } else {
            res.cookie('userTaken', true);
            //res.cookie('feedback', 'User already exists.')
            res.redirect('/user/new');
        }
      });
  };

  const loginUser = (req, res) => {
    res.send("now login");
  };


  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                      Export controller functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
    loginUser,
    createUser,
    newUser,
    getUser,
    getMain
  };
};
