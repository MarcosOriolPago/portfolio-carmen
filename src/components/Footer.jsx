import './Footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Carmen Sierra Sancho. All rights reserved.</p>
          <p>Architecture Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;