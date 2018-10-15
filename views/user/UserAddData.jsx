var React = require("react");
var DefaultLayout = require('../layout/Default');

class UserAddData extends React.Component {
  render() {
    return (
      <DefaultLayout title="Add more passes">
          <div className="AddForm-page">
            <form method="POST" action="/user">
            <h3>Gym Name</h3>
                <select name="gym">
                    <option value="Boulder Movement">Boulder Movement</option>
                    <option value="Boulder World">Boulder World</option>
                    <option value="Boulder +">Boulder +</option>
                    <option value="Boys Town Climbing">Boys Town Climbing Wall</option>
                    <option value="Climb Central">Climb Central</option>
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
            <h3>Number of Passes</h3> <input name="quantity" type="text" pattern="\d*" maxLength="2" />
            <h3>Expiry Date</h3> <input  name="expiry" type="date" />

            <input type="submit" value="Add Passes" />
            </form>
          <footer>

          </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = UserAddData;
