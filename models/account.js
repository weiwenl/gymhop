module.exports = (dbPool) => {
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//                             Models (Access database) logic
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const checkUser = (input, callback) => {
      const queryText = "SELECT * FROM users WHERE name='" + input.name + "';";

      dbPool.query(queryText, (error, queryResult) => {

        if (error){
            console.log("ERROR QUERYING DB: ", error);
        }

        const sqlQueryResultUser = queryResult.rows[0];
        callback(null, sqlQueryResultUser);

      });
  }

  const addData = (input, id, callback) => {
    console.log("What is in input: ", input);
    console.log("What is in id: ", id);
    console.log(input.gym);
    console.log(input.quantity);
    console.log(input.expiry);
    const queryText = "INSERT INTO entrypasses (gym_name, quantity, expiry_date, user_id) VALUES ($1, $2, $3, $4);"
    const values = [input.gym, input.quantity, input.expiry, id];
console.log("GEEZ",queryText);
    dbPool.query(queryText, values, (error, queryResult) => {
      console.log("OMG",queryText);
      callback(error);
    });
  }

  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                       Export Model functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
      addData,
      checkUser
    };
  };
