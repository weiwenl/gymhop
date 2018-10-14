var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserReset extends React.Component {
  render() {

    return (
      <DefaultLayout title="Reset my Password">
          <div className="UserReset-page">
              <form method="POST" action="/account/login">
              <h1>Please reset your password, { this.props.cookie }</h1>
              <div>
                <h3>New Password</h3> <input name="newpassword" type="text" />
              </div>
              <input type="submit" value="Confirm" />
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

module.exports = UserReset;
