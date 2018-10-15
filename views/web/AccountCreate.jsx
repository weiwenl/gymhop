var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserNew extends React.Component {
  render() {
    let userTaken;
    if(this.props.cookie === 'true') {
        userTaken = <h3 className="create-error">Name already exists.</h3>
    }
    return (
      <DefaultLayout title="Creating an Account">
          <div className="UserNew-page">
              <form method="POST" action="/account">
              <h1>Sign Up</h1>
              <div>
                {userTaken}
                <h3>Name</h3> <input name="name" type="text" />
              </div>
              <div>
                <h3>Password</h3> <input name="password" type="text" />
              </div>
              <input type="submit" value="Sign Up" />
              <h4>By tapping Sign up, you agree to our terms of service and privacy policy.</h4>
            </form>
          <footer>
              
          </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = UserNew;
