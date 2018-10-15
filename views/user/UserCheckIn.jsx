var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserAddData extends React.Component {
  render() {
    return (
      <DefaultLayout title="Gym check-in">
          <div className="removeForm-page">
            <form method="POST" action="">
            <h3>Gym Name</h3>
                <select name="gym">
                    <option value="BM">Boulder Movement</option>
                    <option value="BW">Boulder World</option>
                    <option value="BP">Boulder +</option>
                    <option value="BT">Boys Town Climbing Wall</option>
                    <option value="CC">Climb Central</option>
                    <option value="CL">Climbers Laboratory</option>
                    <option value="FB">Fit · Bloc</option>
                    <option value="GU">GroundUp Climbing</option>
                    <option value="KC">Kinetics Climbing</option>
                    <option value="OS">Onsight Climbing</option>
                    <option value="OC">Oyeyo Climbing</option>
                    <option value="YS">Safra Yishun Climbing</option>
                    <option value="TC">The Cliff</option>
                    <option value="RS">The Rock School</option>
                    <option value="UB">Upside Boulders</option>
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

module.exports = UserAddData;
