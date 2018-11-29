var React = require("react");
var DefaultLayout = require('../layout/Default');

class index extends React.Component {
  render() {
    return (
      <DefaultLayout title="Welcome to GYMhop">
        <div class="homepage">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="">
            <div class="container">
              <span class="navbar-brand">GYM hop</span>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
              </button>

              <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li>
                    <a class="nav-link" href="#upcomingevents">Upcoming Events</a>
                  </li>
                  <li>
                    <a class="nav-link" href="#gymsnearme">Gyms Near Me</a>
                  </li>
                  <li>
                    <a class="nav-link" href="/account/login">Log In</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <img src="home.jpg" class="img-fluid homepage-image" alt="Responsive image" />

          <div class="overlay container">
            <div class="row">
              <div class="col-lg-7">
                <div class="mx-auto">
                  <a class="btn btn-success register-btn" href="account/new" role="button">Register now for Free!</a>
                    <div class="home-caption mt-2">
                      <h1 class="mb-5">Losing track on the number of climbing multi-passes?</h1>
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
