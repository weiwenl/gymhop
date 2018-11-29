var React = require("react");
var DefaultLayout = require('../layout/Default');

class accountlogin extends React.Component {
  render() {
    let wrongLogin;
    let resetPassword
    if(this.props.cookie === 'true') {
        wrongLogin = <h6 className="create-error">Incorrect Name/Password Combination</h6>
        // resetPassword = <a className="create-error" href="/account/reset/new">I forgot my Password</a>
        resetPassword = <a className="create-error" href="#">Forgot your password?</a>
    }
    return (
      <DefaultLayout title="Already a member">
          <div class="loginaccount">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="">
              <div class="container">
                <span class="navbar-brand"><a class="text-white" href="/">GYM hop</a></span>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                </button>

              </div>
            </nav>
            <div class="container">

              <div class="d-flex justify-content-center align-items-end">
                <div class="card">
                  <div class="card-header">
                    <h3>Sign In</h3>
                  </div>

                  <div class="card-body">
                    <form method="POST" action="/account/login">
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input class="form-control" type="text" name="name" placeholder="username"/>
                    </div>

                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                      </div>
                      <input class="form-control" type="password" name="password"   placeholder="password"/>
                    </div>

                    <div class="form-group">
                      <input type="submit" value="Log In" class="btn float-right"/>
                      <div class="float-left text-danger">{wrongLogin}</div>
                    </div>
                  </form>
                </div>

                <div class="card-footer">
                  <div class="d-flex justify-content-center links">
                    <a className="btn btn-light" href="/account/new" role="button">New to GYM hop? Sign-up</a>
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

module.exports = accountlogin;
