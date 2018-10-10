var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserLogin extends React.Component {
  render() {
    let wrongLogin;
    let resetPassword
    if(this.props.cookie === 'true') {
        wrongLogin = <h3 className="create-error">Incorrect Name/Password Combination</h3>
        resetPassword = <a className="create-error" href="#">Reset my Password</a>
    }
    return (
      <DefaultLayout title="Sign In">
          <div className="UserLogin-page">
              <form method="POST" action="/login">
              <h1>Sign In</h1>
              <div>
                {wrongLogin}
                <h3>Name</h3> <input name="name" type="text" />
              </div>
              <div>
                <h3>Password</h3> <input name="password" type="text" />
              </div>
              <input type="submit" value="Log In" />
              {resetPassword}
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
