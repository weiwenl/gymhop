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
    db.account.newPassword(req.body, name, (error, queryResult) => {
        if (error) {
          console.error('ERROR CHANGING OLD PASSWORD: ', error);
          res.sendStatus(500);
        }
        res.clearCookie('wrongLogin');
        //res.cookies('name');
        res.clearCookie('name', name);
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

        db.account.checkUser(req.body, req.cookies.userId, (error, queryResult, queryResultData) => {
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

                let userInfo = {
                  user: queryResult.name,
                  data: queryResultData
                }

                res.redirect('/account/login')

                //res.render('./user/UserAccount', {obj: userInfo});
                //console.log("queryResult: ", queryResultData[0].gym_name);
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
      db.account.createUser(req.body, (error, queryResult) => {

        if (error) {
          console.error('ERROR CREATING USER: ', error);
          res.sendStatus(500);
        }

        if (queryResult === undefined) {
            res.redirect('/account/login');
        } else {
            res.cookie('userTaken', true);

            res.redirect('/account/new');
        }
      });
  };

  const loginUser = (req, res) => {

 db.account.showUserData(req.cookies.userId, (error, queryResult) => {
     if (error) {
         console.log('ERROR AUTHENTICATING USER: ', error);
         res.sendStatus(500);
     } else {
             let userInfo = {
               user: req.cookies.name,
               data: queryResult
             }
            res.render('./user/UserAccount', {obj: userInfo});
             //res.render('./web/AccountLogin', {obj: userInfo});
         }
});
     //res.render('./web/AccountLogin', {cookie: req.cookies['wrongLogin']});

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
