module.exports = (app, db) => {
  const user = require('./controllers/user')(db);
  const account = require('./controllers/account')(db);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//                                  CRUD users
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
app.get('/', user.getMain);
app.get('/user', user.getUser);
app.get('/user/new', user.newUser);
app.post('/user', user.createUser);
/////////
// app.get('/account', user.loginUser);
// app.post('/account', account.checkUser);
app.get('/login', user.loginUser);
app.post('/login', account.checkUser);
////////
app.get('/logout', account.logOut);
//app.get('/user/reset', user.resetUser);

//app.get('/account/:id', account.userProfile);
};
