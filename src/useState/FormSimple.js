import React, { useState } from 'react';
import './myStyle.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    state: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to server
    console.log(formData);
  };

  return (
    
    <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Simple Form Create by Using Reactjs</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>State:</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select</option>
          <option value="CA">Calcutta</option>
          <option value="NY">Nagaland</option>
          <option value="TX">Telanagan</option>
          {/* Add more states as needed */}
        </select>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Subject:</label>
        <div>
          <input
            type="radio"
            name="subject"
            value="PCM"
            checked={formData.subject === 'PCM'}
            onChange={handleChange}
            required
            style={styles.radioInput}
          />
          <label htmlFor="subject" style={styles.radioLabel}>PCM</label>
        </div>
        <div>
          <input
            type="radio"
            name="subject"
            value="PCB"
            checked={formData.subject === 'PCB'}
            onChange={handleChange}
            required
            style={styles.radioInput}
          />
          <label htmlFor="subject" style={styles.radioLabel}>PCB</label>
        </div>

        <div>
          <input
            type="radio"
            name="subject"
            value="BSc"
            checked={formData.subject === 'BSc'}
            onChange={handleChange}
            required
            style={styles.radioInput}
          />
          <label htmlFor="subject" style={styles.radioLabel}>BSc</label>
        </div>
        {/* Add more radio options as needed */}
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        />
      </div>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'lightblue'
  },
  formGroup: {
    marginBottom: '40px'

  },
  label: {
    marginBottom: '5px',
    display: 'block',
    textalign : 'right'
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  textarea: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    resize: 'vertical'
  },
  radioInput: {
    marginRight: '5px'
  },
  radioLabel: {
    display: 'inline-block',
    marginRight: '15px'
  }
};

export default Form;
