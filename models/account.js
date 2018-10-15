const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (dbPool) => {
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//                             Models (Access database) logic
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const checkUser = (input, id, callback) => {
      const queryText = "SELECT * FROM users WHERE name='" + input.name + "';";

      dbPool.query(queryText, (error, queryResult) => {

        if (error){
            console.log("ERROR QUERYING DB: ", error);
        }
        else{
          const queryString = "SELECT * FROM entrypasses WHERE user_id = $1";
          const values = [id];

          dbPool.query(queryString, values, (error, queryResultData) => {
            // console.log("OR THIS?", queryResult.rows);
            // console.log("PROBLEM?", queryResultData.rows);
              if (error){
                console.error("ERROR GETTING SHOW DATA", error);
              } else{
                callback(null, queryResult.rows[0], queryResultData.rows);
              }

          });
        }
        //const sqlQueryResultUser = queryResult.rows[0];
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


  const newPassword = (password, name, callback) => {
      let newHashPassword = sha256(SALT + password.newpassword);
      const queryText = "UPDATE users SET password='" + newHashPassword + "' WHERE name='" + name + "';";

          dbPool.query(queryText, (error, queryResult) => {
            callback(error, queryResult);
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
  };
