var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserAccount extends React.Component {
  render() {
      console.log(this);
    return (
      //Welcome user's name
      <DefaultLayout title="Welcome + { this.props.user }">
          <div className="UserAccount-page">
            <a href="#">Edit Profile</a>
            <a href="/account/logout">Logout</a>
            <div>
              <h3>Total Passes</h3>
              <h3>Total Gym</h3>
            </div>
            <img src="#" alt="Display Picture"></img>
            <h3>{ this.props.user }</h3>
            <h3>User's status</h3>
            <h3>User's join date</h3>

            <div>
                <a href="/user/add">Add Passes</a>
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
