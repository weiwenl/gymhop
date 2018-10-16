const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (db) => {
  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                             Controller logic
  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const getData = (req, res) => {
    res.render('./user/useradddata');
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
            console.log('ERROR GETTING DATA FROM USER: ', error);
            res.sendStatus(500);
        } else {
          // db.user.sumPasses(req.cookies.userId, (error, querySum) => {
          //   if (error) {
          //     console.log('ERROR DELETING PASS: ', error);
          //     res.sendStatus(500);
          //   } else {
          db.user.deletePass(req.cookies.userId, (error, queryResult2) => {
            if (error) {
              console.log('ERROR DELETING PASS: ', error);
              res.sendStatus(500);
            } else {
              let userInfo = {
                      user: req.cookies['name'],
                      data: queryResult
              }
              res.render('./user/useraccount', {obj: userInfo});
            }

          });
        }
    //   });
    // }
  });
}

  const userCheckIn = (req, res) => {
    res.render('./user/usercheckin');
  }

  const subtractPass = (req, res) => {
    ////
    db.user.subtractPass(req.body.gym, req.cookies.userId, (error, queryResult) => {
        if (error) {
            console.log('ERROR AUTHENTICATING USER: ', error);
            res.sendStatus(500);
        } else {
          res.redirect('/account/user');
        }


    });
    ////
  }


  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                      Export controller functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
    subtractPass,
    userCheckIn,
    userHome,
    getData,
    addData
  };
};
