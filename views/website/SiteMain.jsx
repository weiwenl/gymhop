var React = require("react");
var DefaultLayout = require('../layout/Default');

class SiteMain extends React.Component {
  render() {
    return (
      <DefaultLayout title="Mainpage">
          <div className="main-page">
            <form className="main-search-form">
              <input
                  type="text"
                  placeholder="Search..."
                  value={this.props.filterText}
                  ref="filterTextInput"
                  onChange={this.handleChange}
                   disabled="disabled"
              />
            </form>
            <h2>Nearby Venues</h2>
            <h2>Upcoming Events</h2>
            <h2>Gym Passes Record</h2>
            <footer>
                {/* <h3>Designed by climbers, made for climbers</h3>
                <h3>Terms etc ...</h3> */}
            </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = SiteMain;
