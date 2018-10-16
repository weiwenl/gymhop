var React = require("react");
var DefaultLayout = require('../layout/Default');


class useraccount extends React.Component {
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
      <DefaultLayout title= {this.props.obj.user}>
          <div className="useraccount-page">
            <a href="#">Edit Profile</a>
            <a href="/account/logout">Logout</a>
            <div>
              <h3>Total Passes</h3><h3>{this.props.obj.sum}</h3>
            </div>
            <img src="/dp.jpg"></img>
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

module.exports = useraccount;
