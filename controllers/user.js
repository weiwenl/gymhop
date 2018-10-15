const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (db) => {
  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                             Controller logic
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  const getData = (req, res) => {
    res.render('./user/UserAddData');
  };

  const addData = (req, res) => {
    let id = req.cookies['userId'];


    db.user.addData(req.body, id, (error, queryResult) => {
      if(error){
        console.log('ERROR ADDING PASSES DATA: ', error);
        res.sendStatus(500);
      }
      //console.log("SUCCESS");
    });
    res.redirect('/account/user' );
  };

  const userHome = (req, res) => {
    db.user.userHome(req.cookies.userId, (error, queryResult) => {
        if (error) {
            console.log('ERROR AUTHENTICATING USER: ', error);
            res.sendStatus(500);
        } else {

          let userInfo = {
                  user: req.cookies['name'],
                  data: queryResult
          }
          res.render('./user/UserAccount', {obj: userInfo});
        }


  });
}

  const userCheckIn = (req, res) => {
    res.render('/user/userCheckIn');
  }


  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                      Export controller functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
    userHome,
    getData,
    addData
  };
};
