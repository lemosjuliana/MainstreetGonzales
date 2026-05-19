import { useEffect, useMemo, useState } from 'react'
import events from '../../data/events'

function EventHero() {
  const slides = useMemo(() => events.map((event) => event.image), [])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return undefined

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  if (slides.length === 0) return null

  return (
    <section className="events-hero">
      <div className="events-hero-background">
        {slides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Events slide ${index + 1}`}
            className={`events-hero-image ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="events-hero-overlay" />

      <div className="events-hero-content">
        <h1 className="events-hero-title">Events</h1>
        <p className="events-hero-description">
          Join us throughout the year for festivals, family-friendly gatherings, and downtown
          experiences that celebrate the spirit of Gonzales Main Street.
        </p>
      </div>

      <div className="events-hero-dots" aria-label="Event hero slides">
        {slides.map((image, index) => (
          <button
            key={`dot-${image}`}
            type="button"
            className={`events-hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .events-hero {
          position: relative;
          width: 100vw;
          min-height: 60vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          margin: 0 calc(-50vw + 50%);
        }

        .events-hero-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .events-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.7s ease;
        }

        .events-hero-image.active {
          opacity: 1;
        }

        .events-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.72);
          z-index: 2;
        }

        .events-hero-content {
          position: relative;
          z-index: 3;
          max-width: 700px;
          padding: 3rem 2rem;
          color: #fff;
        }

        .events-hero-title {
          font-family: 'IBM Plex Serif', serif;
          margin: 0 0 1rem 0;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.05;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .events-hero-description {
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .events-hero-dots {
          position: absolute;
          right: 2rem;
          bottom: 1.5rem;
          z-index: 4;
          display: flex;
          gap: 0.6rem;
        }

        .events-hero-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: transparent;
          cursor: pointer;
          padding: 0;
        }

        .events-hero-dot.active {
          background: #fff;
        }

        @media (max-width: 1024px) {
          .events-hero {
            min-height: 50vh;
          }

          .events-hero-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .events-hero {
            min-height: 42vh;
          }

          .events-hero-content {
            padding: 2rem 1rem;
          }

          .events-hero-title {
            font-size: 2rem;
          }

          .events-hero-description {
            font-size: 0.95rem;
          }

          .events-hero-dots {
            right: 1rem;
            bottom: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default EventHero
