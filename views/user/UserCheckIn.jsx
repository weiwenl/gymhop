var React = require("react");
var DefaultLayout = require('../layout/Default');

class usercheckin extends React.Component {
  render() {
    return (
      <DefaultLayout title="Gym check-in">
          <div className="removeForm-page">
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

            <input type="submit" value="Check In" />
            </form>
          <footer>

          </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = usercheckin;
