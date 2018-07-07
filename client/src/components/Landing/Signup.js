import React from 'react';

import Button from '../CommonComps/Button';

//Encourages users to signup for announcements of specials, events, promos.
const Signup = () => (
  <div
    title="col s12 m12 l12"
    style={{
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      padding: 20
    }}
  >
    <p> Sign Up With Us</p>
    <span>Sign up to hear from us about specials, sales and events</span>
    <Button node="Sign Up" /> or <Button node="Login" />
  </div>
);

export default Signup;
