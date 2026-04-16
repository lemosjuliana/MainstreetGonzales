import Navbar from './Navbar'
import Footer from './Footer'

function PageLayout({ children }) {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          height: 100%;
        }

        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          main {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 768px) {
          main {
            padding: 1.5rem 1rem;
          }
        }

        @media (max-width: 480px) {
          main {
            padding: 1rem 0.75rem;
          }
        }
      `}</style>
    </div>
  )
}

export default PageLayout
