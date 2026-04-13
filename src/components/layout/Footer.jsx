import logo from "../../assets/icons/logo.png"
import facebook from "../../assets/icons/facebook_icon.png"
import instagram from "../../assets/icons/instagram_icon.png"
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  return (
    <footer style={styles.footer}>
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logo} alt="Main Street Logo" />
          </div>
          <p>City of Gonzales, Texas</p>
          <div className="social-links">
            <a href="https://www.facebook.com/GonzalesMainStreet/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <img src={facebook} alt="Facebook Logo" />
            </a>
            <a href="https://www.instagram.com/gonzalesmainstreet/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img src={instagram} alt="Instagram Logo" />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="footer-column contact-info">
          <h3>Contact Us</h3>
          <p>(830) 672-2815</p>
          <p>tpadilla@gonzales.texas.gov</p>
        </div>

        {/* Right Column */}
        <div className="footer-column">
          <h3>Mainstreet Programs</h3>
          <div className="programs-links">
            <button onClick={() => navigate('/about')}>
              Honor Our Veterans
            </button>
            <button onClick={() => navigate('/grants')}>
              Gonzales Main Street Incentive Program
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Mainstreet Gonzales. All rights reserved
      </div>

      <style>{`
        .footer-container {
          margin: 0 auto;
          padding: 3rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 3rem;
          background: #210B02;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .footer-logo img {
          height: 40px;
          width: auto;
        }

        .footer-column p {
          margin: 0.5rem 0;
          color: #FBDCD0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 0.7rem;
          text-align: left;
        }

        .footer-column:first-child p {
          text-align: left;
        }

        .footer-column h3 {
          font-family: 'IBM Plex Serif', serif;
          color: #FBDCD0;
          margin: 0 0 1rem 0;
          font-size: 0.9rem;
          text-align: left;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .social-links a {
          display: inline-block;
          width: 35px;
          height: 35px;
          background-color: #BE400E;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FBDCD0;
          text-decoration: none;
          transition: background-color 0.3s ease;
          font-weight: bold;
          font-size: 1rem;
        }

        .social-links a:hover {
          background-color: #F17341;
        }

        .social-links a img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        .contact-info p {
          margin: 0.5rem 0;
          color: #FBDCD0;
          font-family: 'IBM Plex Serif', serif;
        }

        .programs-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
        }

        .programs-links button {
          background: none;
          border: none;
          color: #FBDCD0;
          text-align: left;
          cursor: pointer;
          font-family: 'IBM Plex Serif', serif;
          text-decoration: none;
          padding: 0;
          font-size: 0.7rem;
          transition: color 0.3s ease;
        }

        .programs-links button:hover {
          color: #F17341;
        }

        .footer-bottom {
          background-color: #210B02;
          padding: 2rem;
          text-align: center;
          font-family: 'IBM Plex Serif', serif;
          color: #605551;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            padding: 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#f9f9f9',
    borderTop: '2px solid #BE400E',
    marginTop: '4rem'
  }
}

export default Footer
