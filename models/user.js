const sha256 = require('sha256');
const SALT = "Bananas";

module.exports = (dbPool) => {
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//                             Models (Access database) logic
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


  const addData = (input, id, callback) => {
    const queryText = "INSERT INTO entrypasses (gym_name, quantity, expiry_date, user_id) VALUES ($1, $2, $3, $4);"
    const values = [input.gym, input.quantity, input.expiry, id];
    dbPool.query(queryText, values, (error, queryResult) => {
      callback(error);
    });
  }

  const userHome = (id, callback) => {
      const queryText = "SELECT * FROM entrypasses WHERE user_id = $1;"
      const values = [id];

      dbPool.query(queryText, values, (error, queryResult) => {
        if (error){
            console.error("ERROR GETTING USER DATA", error);
        } else{
            callback(null, queryResult.rows);
        }

      });
  }

  // const removeData = (input, id, gym, callback) => {
  //   const queryText =
  // }



  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                       Export Model functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
    addData,
    userHome
    };
};
