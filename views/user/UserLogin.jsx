var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserLogin extends React.Component {
  render() {
    return (
      <DefaultLayout title="Sign In">
          <div className="UserLogin-page">
              <form method="POST" action="/user/account">
              <h1>Sign In</h1>
              <div>
                <h3>Name</h3> <input name="name" type="text" />
              </div>
              <div>
                <h3>Password</h3> <input name="password" type="text" />
              </div>
              <input type="submit" value="Log In" />
            </form>
          <footer>
              {/* <h3>Designed by climbers, made for climbers</h3>
              <h3>Terms etc ...</h3> */}
          </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = UserLogin;
