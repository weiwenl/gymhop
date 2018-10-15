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
    res.render('./user/UserAccount', {user: req.cookies['name']});
  }

  const userCheckIn = (req, res) => {
    res.render('/user/userCheckIn');
  }

  // const showData = (req, res) => {
  //   let id = req.cookies.userId;
  //   db.user.showData(id, (error, queryResult) => {
  //     console.log("THIS", queryResult);
  //     if(error){
  //       console.log('ERROR ADDING PASSES DATA: ', error);
  //       res.sendStatus(500);
  //     }
  //     else{
  //       res.render('user/UserAccount', {info: queryResult});
  //     }
  //   });
  // }
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                      Export controller functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
    //showData,
    userHome,
    getData,
    addData
  };
};
