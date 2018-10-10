var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserMain extends React.Component {
  render() {
    return (
      <DefaultLayout title="Register/Login">
          <div className="UserMain-page">
            <div>
                <h2><a href="/user/new">Register</a></h2>
            </div>
            <div>
                <h2><a href="/login">Login</a></h2>
            </div>

            <footer>
                {/* <h3>Designed by climbers, made for climbers</h3>
                <h3>Terms etc ...</h3> */}
            </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = UserMain;
