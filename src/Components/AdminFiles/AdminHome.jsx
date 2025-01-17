import React from 'react';
import '../../cssFiles/AdminHome.css'; // Import your CSS styles
import AdminMenu from '../AdminFiles/AdminMenu';

const AdminHome = () => {
  return (
    <>
    <AdminMenu/>
    <div className="app"> 
      <section className="hero">
        <h2>Your Path to Financial Success</h2>
        <p>Unlock the potential of your finances with expert advice and personalized strategies.</p>
        <button className="cta-button">Get Started</button>
      </section>
      
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>We are dedicated to helping you achieve your financial goals through comprehensive planning and innovative solutions.</p>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Financial Planning</li>
          <li>Investment Management</li>
          <li>Retirement Strategies</li>
        </ul>
      </section>

      <footer className="footer" id="contact">
        <h2 style={{color:"white",fontSize:"25px"}}>Contact Us</h2>
        <div style={{display:"flex",justifyContent:"center"}}>
        <p>Email: contact@pathtoprofitable.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Follow us on social media: [links]</p>
        </div>
    </footer>
    </div>
    </>
  );
};

export default AdminHome;
