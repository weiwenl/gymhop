var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserMain extends React.Component {
  render() {
    return (
      <DefaultLayout title="Register/Login">
          <div className="user-page">
              {/* <Link to="/UserNew">
                  <button type="button">Register</button>
              </Link>
              <Link to="/UserLogin">
                  <button type="button">Login</button>
              </Link> */}
            <button>Register</button>
            <button>Login</button>
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
