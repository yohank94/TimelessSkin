import React, { Component } from 'react';

import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { DivTitle } from '../CommonComps';

import './index.css';

class ContactPage extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <DivTitle title="Contact Us" />
        <ContactForm onSubmit={this.submit} />
        <ContactInfo />
      </div>
    );
  }
}
export default ContactPage;
