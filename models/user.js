const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (dbPool) => {
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//                             Models (Access database) logic
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
  const createUser = (user, callback) => {

        const queryText = "SELECT * FROM users WHERE name='" + user.name + "';";

        dbPool.query(queryText, (error, queryResult) => {
            console.log("SELECT: ", queryResult);
            if (error) {
                console.log('ERROR QUERYING DB: ', error.message);
            }
            if (queryResult.rows.length !== 0) {
                callback(error, queryResult.rows);
                console.log('SELECT3: ',queryResult);
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
      createUser
    };
};
