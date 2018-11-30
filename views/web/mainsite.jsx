var React = require("react");
var DefaultLayout = require('../layout/default');

class mainsite extends React.Component {
  render() {
    return (
      <DefaultLayout title="Mainpage">
          <div className="main-page col-">
            <div className="topbar"><h1>Gym Hop</h1>
            </div>
            <div>
            {/* <form className="search-form">
              <h2><input
                  type="text"
                  placeholder="Search..."
                  value={this.props.filterText}
                  ref="filterTextInput"
                  onChange={this.handleChange}
                   disabled="disabled"
              /></h2>
            </form> */}
          </div>
          <div className="middlebar">
            <h2>Nearby Venues</h2>
            <h2>Upcoming Events</h2>
          </div>
          <div className="bottombar">
            <h2>Keep track of your Gym Passes</h2>
            <div className="register">
                <h2><a href="/account/new">Register</a></h2>
            </div>
            <div className="login">
                <h2><a href="/account/login">Login</a></h2>
            </div>
          </div>
            <footer>
                {/* <h4>Designed by climbers, for climbers</h4> */}
            </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = mainsite;
