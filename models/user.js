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
                console.error("ERROR GETTING USER DATA: ", error);
          } else{
            callback(null, queryResult.rows);

              // const queryText = "DELETE FROM entrypasses WHERE quantity = 0;"
              // dbPool.query(queryText, (error, queryResult) => {
              //   if (error){
              //     console.error("ERROR DELETING DATA: ", error);
              //   }
              //
              // });
            }
      });
  }

const deletePass = (id, callback) => {
    const queryText = "DELETE FROM entrypasses WHERE quantity = 0;"
    dbPool.query(queryText, (error, queryResult) => {
      if (error){
        console.error("ERROR DELETING DATA: ", error);
      }
        callback(null, queryResult.rows)
    });
}


  const subtractPass = (gym, id, callback) => {
      const queryText = "UPDATE entrypasses SET quantity = (quantity - 1) WHERE gym_name = $1 AND user_id = $2 AND quantity > 0;"

      const values = [gym, id];

      dbPool.query(queryText, values, (error, queryResult) => {

        if (error){
            console.error("ERROR SUBTRACTING PASSES", error);
        } else{

            callback(null, queryResult.rows);
        }

      });

  }



  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                       Export Model functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
    deletePass,
    subtractPass,
    addData,
    userHome
    };
};
