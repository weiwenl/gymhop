const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (dbPool) => {
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//                             Models (Access database) logic
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
  const newPassword = (password, name, callback) => {
    console.log("U are updating this name: ", name);
    console.log("new password: ", password.newpassword);
    let newHashPassword = sha256(SALT + password.newpassword);
    console.log(newHashPassword);
    //
    const queryText = "UPDATE users SET password='" + newHashPassword + "' WHERE name='" + name + "';";
    console.log("U QUERY THIS: ", queryText);
    //const newPasswordValue = newHashPassword;

        dbPool.query(queryText, (error, queryResult) => {
          // if (error) {
          //     console.log('ERROR CHANGING USER OLD PW: ', error);
          // }
          callback(error);
        });
  }

  const createUser = (user, callback) => {

        const queryText = "SELECT * FROM users WHERE name='" + user.name + "';";

        dbPool.query(queryText, (error, queryResult) => {

            if (error) {
                console.log('ERROR QUERYING DB: ', error);
            }
            if (queryResult.rows.length !== 0) {
                callback(error, queryResult.rows);
            } else {
              let hashPassword = sha256(SALT + user.password);
              const queryText = 'INSERT INTO users(name, password) values($1, $2)';
              const values = [user.name, hashPassword];

              // set up query
              dbPool.query(queryText, values, (error, queryResult) => {
                callback(error);
              });
            };
        });
  };

  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                       Export Model functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
      newPassword,
      createUser
    };
};
