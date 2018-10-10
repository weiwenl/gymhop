class AddForm extends React.Component {
  render() {
    return (
      <DefaultLayout title="Add more passes">
          <div className="AddForm-page">
            <form method="POST" action="/user">
            <h3>Gym Name</h3> <input name="name" type="text" />
                <select name="gym">
                    <option value="volvo">Volvo XC90</option>
                    <option value="saab">Saab 95</option>
                    <option value="mercedes">Mercedes SLK</option>
                    <option value="audi">Audi TT</option>
                    {/* Others and user will be able to input text */}
                </select>
            <h3>Number of Passes</h3> <input name="name" type="text" />
            <h3>Expiry Date</h3> <input name="name" type="text" />
  
            <input type="submit" value="Sign Up" />
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

module.exports = AddForm;
