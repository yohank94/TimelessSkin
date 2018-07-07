import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';

const textboxStyle = {
  border: '1px solid rgb(136, 136, 136)',
  width: '100%',
  borderRadius: 10,
  padding: '0 5px'
};

const inputFields = ['Name', 'Email Address', 'Phone Number', 'Message'];

const renderInputs = () =>
  inputFields.map((label, index) => (
    <div key={index}>
      <Field
        name={`${label}`}
        id={`${label}Input`}
        component={props => (
          <div className="input-row">
            {label === 'Message' ? (
              <textarea
                {...props}
                style={Object.assign({}, textboxStyle, {
                  width: '103%',
                  height: 120
                })}
              />
            ) : (
              <input {...props} />
            )}
            {props.touched &&
              props.error && <span className="error">{props.error}</span>}
          </div>
        )}
        type="text"
        placeholder={`${label}`}
        style={textboxStyle}
        required
      />
    </div>
  ));

const ContactForm = ({ handleSubmit }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      margin: 20
    }}
  >
    <Form onSubmit={handleSubmit}>
      <h5 style={{ textAlign: 'center', margin: 40, fontFamily: 'serif' }}>
        <span>We would like to hear from you</span>
      </h5>
      {renderInputs()}
      <div
        style={{
          display: 'flex',
          flexGrow: 2,
          justifyContent: 'center',
          textAlign: 'center',
          padding: 20
        }}
      >
        <button style={{ width: '30%', minWidth: '75px', overflow: 'visible' }}>
          Submit
        </button>
      </div>
    </Form>
  </div>
);

export default reduxForm({
  form: 'contact'
})(ContactForm);
