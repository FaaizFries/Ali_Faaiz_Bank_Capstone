import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="number">Phone Number:</label>
        <input type="tel" id="number" name="number" required />

        <button type="submit">Submit</button>
      </form>

      <img
        src="https://thumbs.dreamstime.com/b/real-estate-agent-customers-shaking-hands-together-celebrati-real-estate-agent-customers-shaking-hands-together-122234801.jpg" // Replace with your actual image URL
        alt="Fries Bank Building"
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
      />
    </div>
  );
};

export default Contact;