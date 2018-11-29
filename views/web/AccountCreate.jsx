var React = require("react");
var DefaultLayout = require('../layout/Default');

class accountcreate extends React.Component {
  render() {
    let userTaken;
    if(this.props.cookie === 'true') {
        userTaken = <h6 className="create-error">Name already exists.</h6>
    }
    return (
      <DefaultLayout title="New User">
        <div className="newaccount">
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
                  <h3>New Account</h3>
                </div>

                <div className="card-body">
                  <form method="POST" action="/account">

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

                  <div><h6>By signing up, you agree to our terms of service and privacy policy.</h6></div>

                  <div className="form-group">
                    <input type="submit" value="Sign Up" className="btn float-right"/>
                    <div className="float-left text-danger">{userTaken}</div>
                  </div>


                </form>
              </div>

              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  <a className="btn btn-light" href="/account/login" role="button">Already have an account? Log In</a>
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

module.exports = accountcreate;
