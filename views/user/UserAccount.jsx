var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserAccount extends React.Component {
  render() {

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

            <div>
                <a href="/user/add">Add Passes</a>
            </div>

          <footer>
            
          </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = UserAccount;
