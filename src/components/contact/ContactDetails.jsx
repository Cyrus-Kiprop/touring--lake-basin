import React from 'react';

const ContactDetails = () => {
return (
  <div>
<div className="contact"></div>
<div align="center">
 <div className="row">
<div className="col-md-4">
  <i className="fas fa-phone-alt"></i>
  <div className="contact_phone">
  <h3>CONTACT</h3>
  <p>Our lines are available 24/7 365
+254 707 019 960 / +254 705 397 046 / +254 705 396 990 </p>
  </div>
  </div>
  <div className="col-md-4">
  <i className="far fa-envelope"></i>
  <div className="contact_email">
  <h3>EMAIL</h3>
  <p>Do you have any questions, comments or suggestions? Feel free to drop us a line
info@empowerwomen.com</p>
  </div>
  </div>
  <div className="col-md-4">
  <i className="fas fa-location-arrow"></i>
  <div className="contact_location">
  <h3>LOCATION</h3>
<p>Kalunde building | 100m from Blue Bay Junction along Lusaka road opposite Mamawatoto Supermarket
View On Google Map</p>
  </div>
  </div>
  </div>
  </div>
  </div>
)
}

export default ContactDetails;