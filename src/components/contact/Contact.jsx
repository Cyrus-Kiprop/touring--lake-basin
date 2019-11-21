import React from 'react';
import ContactDetails from './ContactDetails.jsx';

const Contact = () => {
  return (
   <div>
   <ContactDetails />
   <div className="message_form">
  <h3 className="form_header">Want to send us a Message</h3>
  <hr/>
   <div className="form_header">
         </div>   
            <form>
  <div className="row">
  <div className="form-group col-sm-12 col-md-6 col-md-6">
    <label>Full Name</label>
    <input type="text" className="form-control"   placeholder="Enter first name" />
  </div>
  <div className="form-group col-sm-12 col-md-6 col-lg-6">
    <label>Email address</label>
    <input type="email" className="form-control"  placeholder="Enter email" />
  </div>
  <div className="form-group col-sm-12 col-md-12 col-lg-12">
    <label>Subject</label>
    <input type="text" className="form-control"   placeholder="Enter last name" />
  </div>
  <div className="form-group col-sm-12 col-md-12 colo-lg-12">
    <label>Message</label>
    <textarea className="form-control" rows="3"></textarea>
  </div>
      <div className="col text-center">
  <button type="submit"  className="btn btn-success center-block form_button">Submit</button>
  </div>
    </div>
    </form>
</div>
    </div>
  )
}

export default Contact;