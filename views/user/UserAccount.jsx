var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserAccount extends React.Component {
  render() {
  //  console.log("this?",this.props.obj.user);
   console.log("these?", this.props.obj.data);
   // if (this.props.obj.data.length !== 0) {
        var info = this.props.obj.data.map((info) => {
              return (
                <tr>
                  <td>
                    {info.gym_name}
                  </td>
                  <td>
                    {info.quantity}
                  </td>
                  <td>
                    {info.expiry_date.toDateString()}
                  </td>
                </tr>
              )
        });

    // }


    return (

      <DefaultLayout title="Welcome">
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
              <tr>
                {info}
              </tr>
            </table>

            <div>
                <a href="/user/add">Add Passes</a>
            </div>
            <div>
                <a href="#">Gym check-in</a>
            </div>

          <footer>

          </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = UserAccount;
