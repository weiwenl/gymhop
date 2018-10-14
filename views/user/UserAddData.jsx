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
                    <option value="BM">Boulder Movement</option>
                    <option value="BW">Boulder World</option>
                    <option value="BP">Boulder +</option>
                    <option value="BT">Boys Town Climbing Wall</option>
                    {/* <option value="CP">Camp5 Paradigm</option>
                    <option value="CU">Camp5 1U</option> */}
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
                    {/* Others and user will be able to input text */}
                </select>
            <h3>Number of Passes</h3> <input name="quantity" type="text" pattern="\d*" maxLength="2" />
            <h3>Expiry Date</h3> <input  name="expiry" type="date" />

            <input type="submit" value="Add Passes" />
            </form>
          <footer>
              {/* <h3>Designed by climbers, made for climbers</h3>
              <h3>Terms etc ...</h3> */}
          </footer>
          </div>
       </DefaultLayout>
    );
  }
}

module.exports = UserAddData;
