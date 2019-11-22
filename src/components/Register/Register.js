import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div>
        <p className ="registration">Register</p>
        <hr/>
        <form>
  <div className="row">
  <div className="form-group col-sm-12 col-md-6 col-lg-6">
    <label>Username</label>
    <input type="text" className="form-control"   placeholder="Enter username" />
  </div>
  <div className="form-group col-sm-12 col-md-6 col-lg-6">
    <label>Countries</label>
    <select className="form-control">
      <option>Kenya</option>
      <option>USA</option>
      <option>Canada</option>
      <option>China</option>
      <option>South Africa</option>
    </select>
  </div>
  <div className="form-group col-sm-12 col-md-6 col-md-6">
    <label>First Name</label>
    <input type="text" className="form-control"   placeholder="Enter first name" />
  </div>
  <div className="form-group col-sm-12 col-md-6 col-lg-6">
    <label>Last Name</label>
    <input type="text" className="form-control"   placeholder="Enter last name" />
  </div>
  

  <div className="form-group col-sm-12 col-md-6 col-lg-6">
    <label>Email address</label>
    <input type="email" className="form-control"  placeholder="Enter email" />
  </div>
  <div className="form-group col-sm-12 col-md-6 col-lg-6">
    <label>Phone Number</label>
    <input type="text" className="form-control"  placeholder="" />
  </div>
  <div className="form-group col-sm-12 col-md-6 col-lg-6">
    <label>Password</label>
    <input type="password" className="form-control"  placeholder="Password" />
  </div>
  <div className="form-group col-sm-12 col-md-6 col-lg-6">
    <label>Confirm Password</label>
    <input type="password" className="form-control"  placeholder="Confirm Password" />
  </div>
  </div>

  <div className="col text-center">
  <button type="submit"  className="btn btn-primary center-block form_button">Register</button>
  </div>
</form>
        
      </div>
    )
  }
}
export default Register;