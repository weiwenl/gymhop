var React = require("react");
var DefaultLayout = require('../layout/Default');

class usercheckin extends React.Component {
  render() {
    return (
      <DefaultLayout title="Gym Check-In">
        <div className="userCheckin">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="">
            <div className="container">
              <span className="navbar-brand"><a className="text-white" href="/account/user">GYM hop</a></span>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
              </button>

              <div>
                <ul className="navbar-nav ml-auto">
                  <li>
                    <text className="nav-link">Welcome, {this.props.username}</text>
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
                    <h2 className="avatar-name">{this.props.username}</h2>
                  </div>

                  <div className="card-body">
                    <form method="POST" action="">
                    <h3>Gym Name</h3>
                    <select name="gym">
                        <option value="Boulder Movement">Boulder Movement</option>
                        <option value="Boulder World">Boulder World</option>
                        <option value="Boulder +">Boulder +</option>
                        <option value="Boys Town Climbing">Boys Town Climbing Wall</option>
                        <option value="Climb Central">Climb Central</option>
                        <option value="Climbers Laboratory">Climbers Laboratory</option>
                        <option value="Fit Bloc">Fit · Bloc</option>
                        <option value="GroundUp Climbing">GroundUp Climbing</option>
                        <option value="Kinetics Climbing">Kinetics Climbing</option>
                        <option value="Onsight Climbing">Onsight Climbing</option>
                        <option value="Oyeyo Climbing">Oyeyo Climbing</option>
                        <option value="Safra Yishun Climbing">Safra Yishun Climbing</option>
                        <option value="The Cliff">The Cliff</option>
                        <option value="The Rock School">The Rock School</option>
                        <option value="Upside Boulders">Upside Boulders</option>
                    </select>

                    <input class="checkin-btn btn btn-success" type="submit" value="Check In" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = usercheckin;
