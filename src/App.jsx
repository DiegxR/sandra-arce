// filepath: src/App.jsx
import { useState } from 'react'
import './App.css'

// Imágenes del directorio public/images
import Logo from '/images/logotipo/Logo.png'
import HeroImg from '/images/galeria/HeroImagen.jpeg'
import Galeria1 from '/images/galeria/Galeria 1.png'
import Galeria2 from '/images/galeria/Galeria 2.jpeg'

// Imágenes Face
import Neuromodulators from '/images/Procedimientos-face/Neuromodulators 1.jpeg'
import DermalFillers from '/images/Procedimientos-face/Dermal Fillers 2.jpeg'
import IPL from '/images/Procedimientos-face/IPL photofacial-3.jpg'
import FaxPro from '/images/Procedimientos-face/Fax pro laser rejuvenation 4.jpg'
import PRP from '/images/Procedimientos-face/PRP facual tratamients 5.jpg'
import Acne from '/images/Procedimientos-face/ACNE TRATAMIENTO 6.png'
import PDO from '/images/Procedimientos-face/PDO Treats 7.webp'
import ChemicalPeel from '/images/Procedimientos-face/Chemical-Peel 8.jpg'
import Eyelash from '/images/Procedimientos-face/Eyelash Extensions 10.jpg'

// Imágenes Cuerpo
import Semaglutide from '/images/Procedimientos- Cuerpo/Semaglutide-1.webp'
import SpiderVeins from '/images/Procedimientos- Cuerpo/Spider_veins removal 2.jpg'
import LaserHair from '/images/Procedimientos- Cuerpo/Laser Hair Removal 3.jpg'
import HairRestoration from '/images/Procedimientos- Cuerpo/Hair Restauration 4.jpg'
import Liposuction from '/images/Procedimientos- Cuerpo/Tumescent-Liposuction- 5.webp'
import JointInjections from '/images/Procedimientos- Cuerpo/Ijection for paint - 6.jpg'
import IVTherapy from '/images/Procedimientos- Cuerpo/IV therapy 7.jpg'

// Resultados
import Resultado1 from '/images/Resultados/Facial 1.webp'
import Resultado2 from '/images/Resultados/Facial 2.jpg'
import Resultado3 from '/images/Resultados/Facial 3.jpg'
import Resultado4 from '/images/Resultados/Facial 4.jpg'
import Resultado5 from '/images/Resultados/facial 5.webp'
import Resultado6 from '/images/Resultados/facial 6.jpg'
import Resultado7 from '/images/Resultados/Facial 7.webp'
import Resultado8 from '/images/Resultados/Facial 8.jpg'

// Doctora AI
import DoctoraAI1 from '/images/Doctora AI/1.jpeg'
import DoctoraAI2 from '/images/Doctora AI/2.png'
import DoctoraAI3 from '/images/Doctora AI/3.jpeg'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombre').value.trim()
    const documento = document.getElementById('documento').value.trim()
    const telefono = document.getElementById('telefono').value.trim()
    const procedimiento = document.getElementById('procedimiento').value
    const fecha = document.getElementById('fecha').value
    const hora = document.getElementById('hora').value

    const mensaje = `Hello Doctor, I would like to schedule an appointment.:\n\n• Nombre: ${nombre}\n• Documento: ${documento}\n• Teléfono: ${telefono}\n• Procedimiento: ${procedimiento}\n• Fecha preferida: ${fecha}\n• Hora aproximada: ${hora}\n\nThank you very much. I await your confirmation.`

    const numeroDoctor = "14144182353"
    const url = `https://wa.me/${numeroDoctor}?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  const faceTreatments = [
    { img: Neuromodulators, title: "Neuromodulators", desc: "Goodbye wrinkles: fast, safe treatment with no recovery time." },
    { img: DermalFillers, title: "Dermal Fillers", desc: "Restore lost volume and redefine your features with instantly visible results." },
    { img: IPL, title: "IPL Photofacial", desc: "It removes blemishes, redness, and open pores for even, radiant skin like a real-life filter." },
    { img: FaxPro, title: "Fax pro Laser Rejuvenation", desc: "Renew your skin from the inside: Smooth scars, pores, and fine lines with high-precision laser technology." },
    { img: PRP, title: "PRP facial treatment", desc: "100% Natural Rejuvenation: Use the healing power of your own blood to regenerate and bring your skin to life." },
    { img: Acne, title: "Acne Treatment", desc: "Advanced comprehensive treatment: reduces inflammation, regulates oil and deeply cleanses your pores from the first session." },
    { img: PDO, title: "PDO Threads", desc: "Facelift without surgery: redefines the facial contour and tightens the skin immediately and naturally." },
    { img: ChemicalPeel, title: "Chemical-Peel", desc: "Reveals new skin: deeply exfoliates to remove dead cells, blemishes and clogged pores in one session." },
    { img: Eyelash, title: "Eyelash Extensions", desc: "Instantly enhance your look: long, voluminous lashes perfectly designed for your eye type." },
  ]

  const bodyTreatments = [
    { img: Semaglutide, title: "Semaglutide", desc: "Achieve your ideal weight safely and sustainably with leading advanced weight loss medical treatment." },
    { img: SpiderVeins, title: "Sapider Vail Removal", desc: "Regain confidence in your legs: remove spider veins quickly, safely and without surgery." },
    { img: LaserHair, title: "Laser Hair Removal", desc: "Free yourself from daily hair removal: enjoy soft, hair-free skin permanently and safely." },
    { img: HairRestoration, title: "Hair Restoration", desc: "Regain your hair and your confidence with cutting-edge technology for natural and long-lasting density." },
    { img: Liposuction, title: "Tumescent Liposuction", desc: "Sculpt your figure with maximum precision: remove localized fat deposits safely and with faster recovery." },
    { img: JointInjections, title: "Joint injections for pain whith steroids or PRP", desc: "Regain your freedom of movement: Relieve joint pain and reduce inflammation with advanced and regenerative medicine." },
    { img: IVTherapy, title: "IV Therapy", desc: "Recharge your body instantly: maximum absorption of vitamins and minerals to boost your energy, immunity and performance." },
  ]

  const galleryImages = [
    DoctoraAI1, Resultado1, Resultado2, DoctoraAI2,
    Resultado3, Galeria2, DoctoraAI3, Resultado4,
    Resultado5, Resultado6, Resultado7, Resultado8
  ]

  const razones = [
    { icon: "fa-leaf", title: "Natural Results", desc: "We enhance your unique beauty while preserving harmony and natural expression, without artificial results." },
    { icon: "fa-laptop-medical", title: "Advanced Technology", desc: "Premium equipment and products with protocols updated according to the most demanding international standards." },
    { icon: "fa-user-check", title: "Personalized attention", desc: "Detailed evaluation and plan 100% adapted to your skin, age, goals and lifestyle." },
    { icon: "fa-shield-alt", title: "Maximum Security", desc: "Strict medical protocols, rigorous sterilization and priority post-treatment follow-up." },
    { icon: "fa-award", title: "+10 Years of Experience", desc: "International continuous training and thousands of procedures with consistent and reliable results." },
    { icon: "fa-smile-beam", title: "Trust and Satisfaction", desc: "Patients who come back and recommend for honesty, genuine care, and total transparency." },
  ]

  return (
    <>
      {/* ================= HEADER ================== */}
      <header className="header">
        <div className="header-container">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="logo">
            <img src={Logo} alt="Lumina Estética" className="logo-img" />
          </a>

          <nav className="nav-desktop">
            <a href="#tratamientos" className="nav-link">Treatments</a>
            <a href="#nosotros" className="nav-link">About Us</a>
            <a href="#resultados" className="nav-link">Results</a>
            <a href="#contacto" className="nav-link">Contact</a>
          </nav>

          <div className="header-cta">
            <a href="#reservarcita" className="btn-cta">
              <i className="fas fa-calendar-alt"></i>
              <span>Book Appointment</span>
            </a>
          </div>

          <button id="hamburger" className="hamburger" onClick={toggleMobileMenu}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={closeMobileMenu}>Start</a>
          <a href="#tratamientos" onClick={closeMobileMenu}>Treatments</a>
          <a href="#nosotros" onClick={closeMobileMenu}>About Us</a>
          <a href="#resultados" onClick={closeMobileMenu}>Results</a>
          <a href="#contacto" onClick={closeMobileMenu}>Contact</a>
          <a href="#reservarcita" onClick={closeMobileMenu} className="btn-mobile-cta">Book Appointment</a>
        </div>
      </header>

      {/* ================= HERO ================== */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-dot"></div>
            <span>Luxury aesthetics in Milwaukee.</span>
          </div>
          <h1 className="hero-title">
            YOUR BEAUTY,<br />
            <span className="highlight">OUR MASTERPIECE</span>
          </h1>
          <p className="hero-subtitle">
            Advanced aesthetic treatments with state-of-the-art technology and natural results.
          </p>
          <a href="#reservarcita" className="btn-hero">
            <span>Book Appointment</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy clients</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
            <div className="stat">
              <div className="stat-number">+10</div>
              <div className="stat-label">Years of experience</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>DISPLACE</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ================= FACE TREATMENTS ================== */}
      <section id="tratamientos" className="tratamientos-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Face-Treatments</h2>
            <p>Natural results, advanced techniques and personalized attention.</p>
          </div>
          <div className="tratamientos-grid">
            {faceTreatments.map((treatment, index) => (
              <div key={index} className="tratamiento-card">
                <div className="card-image">
                  <img src={treatment.img} alt={treatment.title} />
                </div>
                <div className="card-content">
                  <h3>{treatment.title}</h3>
                  <p>{treatment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BODY TREATMENTS ================== */}
      <section className="tratamientos-section body-treatments">
        <div className="container">
          <div className="section-header">
            <h2>Our Body-Treatments</h2>
            <p>Natural results, advanced techniques and personalized attention</p>
          </div>
          <div className="tratamientos-grid">
            {bodyTreatments.map((treatment, index) => (
              <div key={index} className="tratamiento-card">
                <div className="card-image">
                  <img src={treatment.img} alt={treatment.title} />
                </div>
                <div className="card-content">
                  <h3>{treatment.title}</h3>
                  <p>{treatment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT DOCTOR ================== */}
      <section id="nosotros" className="doctora-section">
        <div className="container">
          <div className="doctora-content">
            <div className="doctora-text">
              <div className="section-header">
                <span className="pretitle">Experience And Passion</span>
                <h2>Meet The <span className="highlight">Dr. Sandra Arce</span></h2>
              </div>
              <p className="intro">
                Aesthetic doctor with more than +10 years of experience dedicated to enhancing the natural beauty of each
                patient through advanced and personalized techniques.
              </p>
              <p>
                My commitment is to offer harmonious, safe and lasting results, always prioritizing the health, naturalness
                and satisfaction of those who trust me. Specialized in non-surgical facial rejuvenation, advanced management
                of hyaluronic acid, botulinum toxin, tensor threads, biostimulators and cutting-edge technologies.
              </p>
              <ul className="highlights">
                <li><strong>Constant updates </strong> on the latest facial and body rejuvenation techniques and technologies.</li>
                <li>Member of the <strong>Colombian Society of Aesthetic Medicine.</strong></li>
                <li>Certified in leading brands of neuromodulators and fillers.</li>
                <li>360° Approach: Face, neck, body and overall well-being</li>
              </ul>
              <a href="#contacto" className="btn-primary">Schedule my personalized evaluation</a>
            </div>
            <div className="doctora-image">
              <div className="image-wrapper">
                <img src={Galeria1} alt="Dra. Sandra Arce - Médica Estética" />
                <div className="image-overlay"></div>
              </div>
              <div className="badges">
                <span className="badge">+10 years of experience</span>
                <span className="badge">Natural results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================== */}
      <section id="resultados" className="content-section">
        <div className="container">
          <h2  className="section-title black">Guaranteed results.</h2>
          <p className="gallery-intro">
            Elegance and precision. Discover our best results and experience the best with Dr. Sandra Arce.
          </p>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`galery-image-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================== */}
      <section id="porque-elegirnos" className="porque-section">
        <div className="container">
          <div className="section-header">
            <span className="pretitle">Razones que nos distinguen</span>
            <h2>¿Why choose us?</h2>
            <p>Absolute commitment to excellence, naturalness and a high-level personalized experience.</p>
          </div>
          <div className="razones-slider">
            {razones.map((razon, index) => (
              <div key={index} className="razon-card">
                <div className="icon-wrapper">
                  <i className={`fas ${razon.icon}`}></i>
                </div>
                <h3>{razon.title}</h3>
                <p>{razon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================== */}
      <section className="mision-vision-section">
        <div className="container">
          <h2 className="section-title black">Our Mission & Vision</h2>
          <div className="content-wrapper">
            <div className="texts-wrapper">
              <div className="mission-vision-grid">
                <div className="card">
                  <h3 className="card-title">Missión</h3>
                  <p className="card-text">
                    My mission as a medical esthetician is to enhance the natural beauty of each person, enhancing their
                    unique traits and helping them to look and feel better about themselves at every stage of life. I am
                    committed to offering personalized, safe and minimally invasive treatments, always based on medical
                    science, professional ethics and active listening to the needs and expectations of my patients. I seek
                    to achieve harmonious, natural and long-lasting results, promoting not only an aesthetic improvement,
                    but also comprehensive well-being, confidence and quality of life, preventing premature aging and taking
                    care of the health of the skin and body.
                  </p>
                </div>
                <div className="card">
                  <h3 className="card-title">Visión</h3>
                  <p className="card-text">
                    To be recognized as a national benchmark (or in my region) in advanced and personalized aesthetic
                    medicine, leading with innovation, ethics and natural results that positively transform lives.
                  </p>
                </div>
              </div>
            </div>
            <div className="doctor-photo">
              <img src={Galeria1} alt="Dr. Sandra Arce" className="doctor-img" />
              <p className="doctor-name">Dr. Sandra Arce.</p>
              <p className="doctor-title">Specialist in Aesthetic Medicine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================== */}
      <section id="equipo" className="team-section">
        <div className="container">
          <h2 className="section-title black">Our Staff</h2>
          <p className="section-subtitle">A professional passionate about your beauty.</p>
          <div className="team-grid">
            <div className="team-card">
              <div className="card-front">
                <div className="photo-container">
                  <img src={Galeria1} alt="Dr. Sandra Arce" className="profile-photo" />
                </div>
                <h3>Dr. Sandra Arce.</h3>
                <p className="cargo">Specialist in Aesthetic Medicine.</p>
                <p className="especialidad">• Responsible for the diagnosis, planning and execution of facial harmonization, rejuvenation and aesthetic medicine treatments.</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/share/1H31gRKKzv/?mibextid=wwXIfr" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/dr._sandraarce/" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT ================== */}
      <section id="reservarcita" className="appointment-section">
        <div className="container">
          <h2 className="section-title black">Book your appointment</h2>
          <p className="section-subtitle">Schedule your personalized consultation with the doctor</p>
          <form id="appointment-form" className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Full Name</label>
                <input type="text" id="nombre" name="nombre" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="documento">Document</label>
                <input type="text" id="documento" name="documento" placeholder="ID" required />
              </div>
            </div>
            <div className="form-row form-row-fix">
              <div className="form-group">
                <label htmlFor="telefono">Phone / WhatsApp</label>
                <input type="tel" id="telefono" name="telefono" placeholder="300 123 4567" required />
              </div>
              <div className="form-group">
                <label htmlFor="procedimiento">Procedure of interest.</label>
                <select id="procedimiento" name="procedimiento" required>
                  <option value="" disabled selected>Select one</option>
                  <option value="Neuromodulators">Neuromodulators</option>
                  <option value="Dermall Fillers">Dermal Fillers</option>
                  <option value="IPL Photofacial">IPL Photofacial</option>
                  <option value="Fax Pro Laser Rejuvenation">Fax Pro Laser Rejuvenation</option>
                  <option value="PRP Facial Treatment">PRP Facial Treatment</option>
                  <option value="PDO Threats">PDO Threats</option>
                  <option value="Chemical Pel">Chemical Pel</option>
                  <option value="Eyelash Extensions">Eyelash Extensions</option>
                  <option value="Semaglutide">Semaglutide</option>
                  <option value="Spider Vein Removal">Spider Vein Removal</option>
                  <option value="Laser Hair Removal">Laser Hair Removal</option>
                  <option value="Hair Restoration">Hair Restoration</option>
                  <option value="Tumescent Liposuction">Tumescent Liposuction</option>
                  <option value="Joint injections for pain whith steroids or PRP">Joint injections for pain whith steroids or PRP</option>
                  <option value="IV Therapy">IV Therapy</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fecha">Preferred date</label>
                <input type="date" id="fecha" name="Date" required />
              </div>
              <div className="form-group">
                <label htmlFor="hora">Approximate time</label>
                <select id="hora" name="hora" required>
                  <option value="" disabled selected>Select schedule</option>
                  <option value="09:00">08:00 AM</option>
                  <option value="10:00">09:00 AM</option>
                  <option value="11:00">10:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn-agendar">
              Schedule an appointment via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================== */}
      <footer id="contacto" className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3 className="footer-logo">Dr. Sandra Arce</h3>
              <p className="footer-desc">Aesthetic Medicine and Facial Rejuvenation.</p>
              <p className="footer-copyright">© 2026 Dr. Sandra Arce. All rights reserved. • Designed by: Alexis Hernandez.</p>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Contacto</h4>
              <ul className="footer-contact">
                <li><span>🗺️</span> Milwaukee.</li>
                <li><span>📱</span> +1-414-418-2353</li>
                <li><span>✉️</span> sandraarceestetica@gmail.com</li>
                <li><span>🕒</span> Monday to Friday: 8:00 a.m. - 6:00 p.m.</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com/share/1H31gRKKzv/?mibextid=wwXIfr" target="_blank" aria-label="Facebook" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078V12h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/dr._sandraarce/" target="_blank" aria-label="Instagram" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.228.273 2.661.113 7.019.055 8.3.04 8.707.04 12c0 3.293.014 3.701.072 4.981.16 4.358 2.582 6.791 6.94 6.947 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.358-.156 6.78-2.589 6.94-6.947.058-1.28.072-1.689.072-4.981 0-3.293-.014-3.701-.072-4.981C23.727 2.661 21.205.228 16.847.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

