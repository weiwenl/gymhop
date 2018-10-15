module.exports = (app, db) => {
  const web = require('./controllers/web')(db);
  const user = require('./controllers/user')(db, web);
  const account = require('./controllers/account')(db, web, user);


  // app.get('/user/checkin', user.userCheckIn);
  // app.post('/user/checkin', user.userShow);
  //---app.post('/user/show', user.showData);
  // Renders add passes page
  app.get('/user/add', user.getData);
  // Redirect user to homepage
  app.post('/user', user.addData);

  // Renders reset password page
  app.get('/account/reset/new', account.resetPassword);
  // Store new password
  app.post('/account/reset', account.newPassword);

  // Renders account create
  app.get('/account/new', web.accountNew);
  // GET THE USER INTO HIS PAGE
  //app.get('/user/home', );
  // Check password and renders page accordingly
  app.post('/account/login', account.checkUser);
  // Renders account login
  app.get('/account/login', account.loginUser);
  // Create new user accounts through db
  app.post('/account', account.createUser);
  // Renders the login homepage
  app.get('/account/user', user.userHome);
  // When link calls /logout, fn delete cookies and redirect user to main site
  app.get('/account/logout', account.logOut);

  // Renders main site
  app.get('/', web.mainpage);
};
