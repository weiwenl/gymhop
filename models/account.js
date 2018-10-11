module.exports = (dbPool) => {
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//                             Models (Access database) logic
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const userProfile = (id, callback) => {

    const queryString = "SELECT * FROM users WHERE id='" + id + "';";

    dbPool.query(queryString, (error, result) => {

        if (error) {
            console.log("query error message: ", error);
        }

        var endResult = result.rows[0];
        console.log('endResult: ',endResult);

    });
};

const checkUser = (input, callback) => {
      const queryText = "SELECT * FROM users WHERE name='" + input.name + "';";

      dbPool.query(queryText, (error, queryResult) => {

        if (error){
            console.log("ERROR QUERYING DB: ", error);
        }

        const sqlQueryResultUser = queryResult.rows[0];
        //console.log('Query status: Success!!', sqlQueryResultUser);
        callback(null, sqlQueryResultUser);

      });
  }

  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //                       Export Model functions
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  return {
      userProfile,
      checkUser
    };
  };
