var React = require("react");
var DefaultLayout = require('../layout/Default');

class index extends React.Component {
  render() {
    return (
      <DefaultLayout title="Welcome to GYMhop">
        <div className="homepage">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="">
            <div className="container">
              <span className="navbar-brand"><a className="text-white" href="/">GYM hop</a></span>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
              </button>

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li>
                    <a className="nav-link" href="#upcomingevents">Upcoming Events</a>
                  </li>
                  <li>
                    <a className="nav-link" href="#gymsnearme">Gyms Near Me</a>
                  </li>
                  <li>
                    <a className="nav-link" href="/account/login">Log In</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <img src="home.jpg" className="img-fluid homepage-image" alt="Responsive image" />

          <div className="overlay container">
            <div className="row">
              <div className="col-lg-7">
                <div className="mx-auto">
                  <a className="btn btn-success register-btn" href="account/new" role="button">Register now for Free!</a>
                    <div className="home-caption mt-2">
                      <h1 className="mb-5">Losing track on the number of climbing multi-passes?</h1>
                    </div>
                    <p>Operating without structures, let the application do the recording <br/>and you focus on climbing.</p>
                </div>
              </div>
            </div>
          </div>
          <footer>

          </footer>
        </div>
  </DefaultLayout>
    );
  }
}

module.exports = index;
