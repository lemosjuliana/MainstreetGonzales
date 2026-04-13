import { useNavigate } from 'react-router-dom'
import heroImage from '../../assets/images/hero_1.jpg'

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src={heroImage} alt="Gonzales Main Street Hero" className="hero-image" />
      </div>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Gonzales Main Street</h1>
        <button className="hero-button" onClick={() => navigate('/about')}>
          Learn More
        </button>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          width: 100vw;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          margin: 0 calc(-50vw + 50%);
          margin-top: -2.5rem;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.63);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          padding: 3rem 2rem;
          max-width: 600px;
          color: white;
          width: 100%;
        }

        .hero-heading {
          font-family: 'IBM Plex Serif', serif;
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 2rem 0;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero-button {
          background-color: #8E300B;
          color: white;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-family: 'IBM Plex Serif', serif;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .hero-button:hover {
          background-color: #BE400E;
          color: white;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-section {
            min-height: 50vh;
          }

          .hero-heading {
            font-size: 2.5rem;
          }

          .hero-content {
            padding: 2rem 1.5rem;
            max-width: 500px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 40vh;
          }

          .hero-heading {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .hero-content {
            padding: 1.5rem 1rem;
            max-width: 100%;
          }

          .hero-button {
            padding: 0.65rem 1.5rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 35vh;
          }

          .hero-heading {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .hero-content {
            padding: 1rem 0.75rem;
          }

          .hero-button {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
