var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserAccount extends React.Component {
  render() {

    let userInfo = this.props.obj.data.map((info) => {
             return (
                <tr>
                   <td key={info.gym_name}>
                     {info.gym_name}
                   </td>
                   <td key={info.quantity}>
                     {info.quantity}
                   </td>
                   <td key={info.expiry_date}>
                     {info.expiry_date.toDateString()}
                   </td>
                </tr>
             )
      });

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
            <h3>{ this.props.obj.user }</h3>

            <table>
                <tr>
                  <th>Gym</th>
                  <th>Quantity</th>
                  <th>Expiry Date</th>
                </tr>

                  {userInfo}
        
            </table>

            <div>
                <a href="/user/add">Add Passes</a>
                <a href="/user/checkin">Check into gym</a>
            </div>

          <footer>

          </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = UserAccount;
