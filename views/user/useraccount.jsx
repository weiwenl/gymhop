var React = require("react");
var DefaultLayout = require('../layout/default');


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
        <div className="useraccount">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="">
            <div className="container">
              <span className="navbar-brand"><a className="text-white" href="/account/user">GYM hop</a></span>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
              </button>

              <div>
                <ul className="navbar-nav ml-auto">
                  <li>
                    <text className="nav-link">Welcome, {this.props.obj.user}</text>
                  </li>
                  {/* <li>
                    <a className="nav-link" href="#editprofile">Edit Profile</a>
                  </li> */}
                  <li>
                    <a className="nav-link" href="/user/checkin">Gym Check-In</a>
                  </li>
                  <li>
                    <a className="nav-link" href="/account/logout">Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container">

              <div className="d-flex justify-content-center align-items-end">
                <div className="card">

                  <div className="card-header">
                    <img src="../boy.jpg" width="80vw" className="avatar rounded-circle"></img>
                    <h2 className="avatar-name">{this.props.obj.user}</h2>
                  </div>

                  <div className="card-body">
                    <table className="table">
                      <thead className="thead">
                        <tr>
                          <th scope="col">Gym</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Expiry Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userInfo}
                      </tbody>
                    </table>
                  </div>

                  <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                      <a className="btn btn-primary" href="/user/add" role="button">Add Passes</a>

                    </div>
                </div>
            </div>
          </div>
        </div>

      </div>
       </DefaultLayout>
    );
  }
}

module.exports = useraccount;
