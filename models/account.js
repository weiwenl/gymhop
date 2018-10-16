const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (dbPool) => {
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//                             Models (Access database) logic
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const checkUser = (input, callback) => {
      const queryText = "SELECT * FROM users WHERE name= $1;";
      values = [input.name];
      dbPool.query(queryText, values, (error, queryResult) => {

        if (error){
            console.log("ERROR QUERYING DB: ", error);
        }

        //const sqlQueryResultUser = queryResult.rows[0];
        callback(null, queryResult.rows[0]);
      });
  }



  const createUser = (user, callback) => {
        const queryText = "SELECT * FROM users WHERE name= $1;";
        values = [user.name];
        dbPool.query(queryText, values, (error, queryResult) => {
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


  const newPassword = (password, name, callback) => {
      let newHashPassword = sha256(SALT + password.newpassword);
      const queryText = "UPDATE users SET password = $1 WHERE name = $2;"
      const values = [newHashPassword, name];

          dbPool.query(queryText, values, (error, queryResult) => {
            if(error){
              console.error("ERROR RESETING PASSWORD: ", error);
            }
            callback(null, queryResult);
          });
  }

  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                       Export Model functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
      createUser,
      newPassword,
      checkUser
    };
}
