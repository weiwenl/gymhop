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
        <div class="newaccount">
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
                  <h3>New Account</h3>
                </div>

                <div class="card-body">
                  <form method="POST" action="/account">

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

                  <div><h6>By signing up, you agree to our terms of service and privacy policy.</h6></div>

                  <div class="form-group">
                    <input type="submit" value="Sign Up" class="btn float-right"/>
                    <div class="float-left text-danger">{userTaken}</div>
                  </div>


                </form>
              </div>

              <div class="card-footer">
                <div class="d-flex justify-content-center links">
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
