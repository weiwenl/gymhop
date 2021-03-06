var React = require("react");
var DefaultLayout = require('../layout/default');

class accountreset extends React.Component {
  render() {

    return (
      <DefaultLayout title="Reset my Password">
          <div className="accountreset-page">
              <form method="POST" action="/account/login">
              <h1>Please reset your password, { this.props.cookie }</h1>
              <div>
                <h3>New Password</h3> <input name="newpassword" type="text" />
              </div>
              <input type="submit" value="Confirm" />
            </form>
          <footer>

          </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = accountreset;
