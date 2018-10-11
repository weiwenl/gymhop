var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserAccount extends React.Component {
  render() {
    return (
      //Welcome user's name
      <DefaultLayout title="Welcome">
          <div className="UserAccount-page">
            <h2>Hello, { this.props.user }!</h2>
            <a href="#">Edit Profile</a>
            <a href="/logout">Logout</a>
            <div>
              <h3>Total Passes</h3>
              <h3>Total Gym</h3>
            </div>
            <img src="#" alt="Display Picture"></img>
            <h3>User's name</h3>
            <h3>User's status</h3>
            <h3>User's join date</h3>
            <div>
                <a href="/account/AddForm">Add Passes</a>
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

module.exports = UserAccount;
