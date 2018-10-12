const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (db) => {
  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                             Controller logic
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
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
            //If no error do these: queryResult exists and password is correct
            if (queryResult !== undefined && sha256(SALT + req.body.password) === queryResult.password) {
                res.cookie('loginStatus', sha256(SALT + 'logged in'));
                res.clearCookie('wrongLogin');
                res.cookie('name', queryResult.name);
                res.cookie('userId', queryResult.id);
                res.render('./account/UserAccount', {user: queryResult.name});
            }

            else {
                res.cookie('wrongLogin', true);
                res.cookie('name', queryResult.name);
                res.redirect('/login/user');
            }
          };
        });
  };

  const getData = (req, res) => {
    res.render('./account/AddForm');
  };

  const addData = (req, res) => {
    let id = req.cookies['userId'];

    db.account.addData(req.body, id, (error, queryResult) => {
      console.log("THIS IS THE DATA U ADDING: ",req.body);
      if(error){
        console.log('ERROR ADDING PASSES DATA: ', error);
        res.sendStatus(500);
      }
      console.log("SUCCESS");
    });
    res.render('./account/UserAccount', {user: queryResult.name});
  };

  return {
    addData,
    getData,
    logOut,
    checkUser
  };
};
