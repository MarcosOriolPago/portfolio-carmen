import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h2>Get in Touch</h2>
        <div className="header-line"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I'm always interested in discussing new opportunities.</p>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>carmen.sierra@email.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;