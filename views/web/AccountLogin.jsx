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
          <div className="loginaccount">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="">
              <div className="container">
                <span className="navbar-brand"><a className="text-white" href="/">GYM hop</a></span>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                </button>

              </div>
            </nav>
            <div className="container">

              <div className="d-flex justify-content-center align-items-end">
                <div className="card">
                  <div className="card-header">
                    <h3>Sign In</h3>
                  </div>

                  <div className="card-body">
                    <form method="POST" action="/account/login">
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                      </div>
                      <input className="form-control" type="text" name="name" placeholder="username"/>
                    </div>

                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                      </div>
                      <input className="form-control" type="password" name="password"   placeholder="password"/>
                    </div>

                    <div className="form-group">
                      <input type="submit" value="Log In" className="btn float-right"/>
                      <div className="float-left text-danger">{wrongLogin}</div>
                    </div>
                  </form>
                </div>

                <div className="card-footer">
                  <div className="d-flex justify-content-center links">
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
