import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Shop images
import crepeit from '../../assets/images/Main Street Businesses/come-crepe-it.webp'
import angelsOutlaws from '../../assets/images/Main Street Businesses/angels-outlaws.webp'

// Stay images
import alcaldeHotel from '../../assets/images/Main Street Businesses/alcalde-hotel.webp'
import chamberCommerce from '../../assets/images/Main Street Businesses/chamber-of-commerce.webp'

// Play images
import crystalTheater from '../../assets/images/Main Street Businesses/crystal-theater.webp'
import starSpangled from '../../assets/images/Main Street Events/star-spangled.jpg'

function Explore() {
  const navigate = useNavigate()
  const [shopImageIndex, setShopImageIndex] = useState(0)
  const [stayImageIndex, setStayImageIndex] = useState(0)
  const [playImageIndex, setPlayImageIndex] = useState(0)

  const shopImages = [crepeit, angelsOutlaws]
  const stayImages = [alcaldeHotel, chamberCommerce]
  const playImages = [crystalTheater, starSpangled]

  const handleShopHover = () => {
    setShopImageIndex((prev) => (prev + 1) % shopImages.length)
  }

  const handleStayHover = () => {
    setStayImageIndex((prev) => (prev + 1) % stayImages.length)
  }

  const handlePlayHover = () => {
    setPlayImageIndex((prev) => (prev + 1) % playImages.length)
  }

  return (
    <section className="explore-section">
      <h1 className="explore-title"><span className="explore-highlight">Explore</span> Gonzales Main Street</h1>
      <p className="explore-description">Gonzales Main Street will be a driving force in ensuring that our iconic downtown contributes to our community’s well-being. Gonzales Main Street will effectively carry out a program to preserve and enhance our downtown through promotions, tourism, encouraging local spending, and inspiring lifelong preservation and revitalization of our historic community.</p>
      <div className="explore-cards">
        {/* Shop Card */}
        <div
          className="explore-card"
          onMouseEnter={handleShopHover}
          onClick={() => navigate('/businesses')}
        >
          <div className="card-image-container">
            <img src={shopImages[shopImageIndex]} alt="Shop" className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="card-title">SHOP</h2>
            <p className="card-description">Support local businesses</p>
          </div>
        </div>

        {/* Stay Card */}
        <div
          className="explore-card"
          onMouseEnter={handleStayHover}
          onClick={() => navigate('/businesses')}
        >
          <div className="card-image-container">
            <img src={stayImages[stayImageIndex]} alt="Stay" className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="card-title">STAY</h2>
            <p className="card-description">Keep Texas History alive</p>
          </div>
        </div>

        {/* Play Card */}
        <div
          className="explore-card"
          onMouseEnter={handlePlayHover}
          onClick={() => navigate('/events')}
        >
          <div className="card-image-container">
            <img src={playImages[playImageIndex]} alt="Play" className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="card-title">PLAY</h2>
            <p className="card-description">Enjoy unique, friendly events</p>
          </div>
        </div>
      </div>

      <style>{`
        .explore-section {
          padding: 4rem 2rem;
          background-color: #fff;
          margin: 0;
        }

        .explore-title {
          font-family: 'IBM Plex Serif', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          text-align: left;
        }

        .explore-description {
          text-align: left;
          margin-bottom: 3rem;
        }

        .explore-highlight {
          color: #BE400E;
        }

        .explore-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .explore-card {
          background-color: #BE400E;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .explore-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        .card-image-container {
          width: 100%;
          height: 250px;
          overflow: hidden;
          background-color: #333;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .explore-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-content {
          padding: 2rem;
          color: white;
        }

        .card-title {
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0 0 0.75rem 0;
          color: white;
        }

        .card-description {
          font-family: 'IBM Plex Serif', serif;
          font-size: 1rem;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .explore-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .explore-cards {
            gap: 1.5rem;
          }

          .card-image-container {
            height: 200px;
          }

          .card-content {
            padding: 1.5rem;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .card-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 768px) {
          .explore-section {
            padding: 3rem 1rem;
          }

          .explore-title {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
          }

          .explore-cards {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .card-image-container {
            height: 220px;
          }

          .card-content {
            padding: 1.5rem;
          }

          .card-title {
            font-size: 1.25rem;
          }

          .card-description {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .explore-section {
            padding: 2rem 1rem;
          }

          .explore-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .explore-cards {
            gap: 1rem;
          }

          .card-image-container {
            height: 180px;
          }

          .card-content {
            padding: 1rem;
          }

          .card-title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          .card-description {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Explore
