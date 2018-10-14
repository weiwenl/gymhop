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
              <h1>Make new Account</h1>
              <div>
                {userTaken}
                <h3>Name</h3> <input name="name" type="text" />
              </div>
              <div>
                <h3>Password</h3> <input name="password" type="text" />
              </div>
              <input type="submit" value="Sign Up" />
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

module.exports = UserNew;
