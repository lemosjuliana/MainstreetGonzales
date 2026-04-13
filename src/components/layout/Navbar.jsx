import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from "../../assets/icons/logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleNavClick = (href) => {
    navigate(href)
    closeMenu()
  }

  return (
    <>
      <nav>
        <a href="/" className="navbar-logo">
        <img src={logo} alt="Main Street Logo" className="navbar-logo-img" />
        </a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => handleNavClick('/')} className={location.pathname === '/' ? 'active' : ''}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('/businesses')} className={location.pathname === '/businesses' ? 'active' : ''}>
              Businesses
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('/events')} className={location.pathname === '/events' ? 'active' : ''}>
              Events
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('/grants')} className={location.pathname === '/grants' ? 'active' : ''}>
              Grants
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('/about')} className={location.pathname === '/about' ? 'active' : ''}>
              About Us
            </button>
          </li>
        </ul>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        nav {
          background-color: transparent;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          position: relative;
          z-index: 100;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          
        }

        .navbar-logo img {
          height: 40px;
          width: auto;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 3.5rem;
          align-items: center;
          margin: 0 auto;
        }

        .nav-links button {
          background: none;
          border: none;
          color: #333;
          font-family: 'IBM Plex Serif', serif;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
        }

        .nav-links button:hover {
          background-color: #F17341;
          color: white;
        }

        .nav-links button.active {
          background-color: #BE400E;
          color: white;
        }

        .nav-links button.active:hover {
          background-color: #F17341;
          color: white;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 0.4rem;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: #333;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(10px, 10px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          nav {
            flex-wrap: wrap;
            padding: 1rem 1.5rem;
            justify-content: flex-start;
            position: relative;
          }

          .navbar-logo {
            position: static;
            font-size: 1.25rem;
          }

          .navbar-logo img {
            height: 35px;
          }

          .hamburger {
            display: flex;
            position: absolute;
            right: 1.5rem;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.98);
            gap: 0;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding: 0;
            margin: 0;
          }

          .nav-links.active {
            max-height: 300px;
            padding: 1rem 2rem;
          }

          .nav-links a {
            padding: 0.8rem 0;
            display: block;
            border-bottom: 1px solid #f0f0f0;
          }

          .nav-links a:last-child {
            border-bottom: none;
          }
        }

        @media (max-width: 480px) {
          nav {
            padding: 0.8rem 1rem;
          }

          .navbar-logo {
            font-size: 1.1rem;
          }

          .navbar-logo img {
            height: 30px;
          }

          .nav-links {
            top: 60px;
          }

          .hamburger {
            right: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
