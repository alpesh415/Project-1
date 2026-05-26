import React, { useEffect, useState } from "react";

export default function App() {

  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [support, setSupport] = useState(0);
  const [workers, setWorkers] = useState(0);


  useEffect(() => {
    let c = 0, p = 0, s = 0, w = 0;

    const interval = setInterval(() => {
      if (c < 232) {
        c++;
        setClients(c);
      }
      if (p < 521) {
        p++;
        setProjects(p);
      }
      if (s < 1453) {
        s += 5;
        setSupport(s);
      }
      if (w < 32) {
        w++;
        setWorkers(w);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="d-flex">

     
      <div
        className="bg-dark text-white p-4 text-center"
        style={{
          width: "250px",
          height: "100vh",
          position: "fixed",
          overflowY: "auto"
        }}
      >
        <img
          src="https://themewagon.github.io/iPortfolio/assets/img/my-profile-img.jpg"
          alt="profile"
          className="rounded-circle mb-3"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            border: "3px solid white"
          }}
        />

        <h4>ALPESH KHANT</h4>
<div class="d-flex justify-content-center gap-3 my-3">

  <button class="btn btn-light rounded-circle" onclick="setActive(this)">
    <i class="bi bi-twitter"> </i>
  </button>

  <button class="btn btn-light rounded-circle" onclick="setActive(this)">
    <i class="bi bi-facebook"></i>
  </button>
{/* 
  <button class="btn btn-light rounded-circle" onclick="setActive(this)">
    <i class="bi bi-instagram"><a href="https://www.instagram.com/___alpesh___05?igsh=OXVkYjVvejg0dGhu"></a></i>
  </button> */}
  <a href="https://www.instagram.com/___alpesh___05?igsh=OXVkYjVvejg0dGhu" target="_blank">
  <button class="btn btn-light rounded-circle">
    <i class="bi bi-instagram"></i>
  </button>
</a>

  <button class="btn btn-light rounded-circle" onclick="setActive(this)">
    <i class="bi bi-linkedin"></i>
  </button>

</div>

        <ul className="nav flex-column mt-4 text-start">
          <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link text-white">About</a></li>
          <li className="nav-item"><a href="#resume" className="nav-link text-white">Resume</a></li>
          <li className="nav-item"><a href="#Portfilo" className="nav-link text-white">Portfolio</a></li>
          <li className="nav-item"><a href="#servies" className="nav-link text-white">Services</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link text-white">Contact</a></li>
        </ul>
      </div>

     
      <div style={{ marginLeft: "250px", width: "100%" }}>

      
        <div
          className="vh-100 d-flex align-items-center text-white"
          style={{
            backgroundImage:
              "url('https://themewagon.github.io/iPortfolio/assets/img/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <h1 className="display-3 fw-bold animate__animated animate__bounceInDown ">ALPESH KHANT</h1>
            <h3>I'm <span className="text-black  ">developer..</span></h3>
          </div>
        </div>

<div className="container py-5" id="about">

  <h2 
    className="fw-bold"
    data-aos="fade-up"
  >
    About
  </h2>

  <div 
    style={{ width: "60px", height: "3px", background: "#0d6efd" }}
    data-aos="fade-up"
    data-aos-delay="100"
  ></div>

  <p 
    className="mt-4 text-muted"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    Magnam dolores commodi suscipit. Necessitatibus eius consequatur.
  </p>

  <div className="row mt-5 align-items-center">

    <div 
      className="col-md-4"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <img
        src="https://themewagon.github.io/iPortfolio/assets/img/my-profile-img.jpg"
        alt="profile"
        className="img-fluid rounded"
      />
    </div>

    <div 
      className="col-md-8"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h3 className="fw-bold">Frond Developer & Web Developer.</h3>

      <p className="fst-italic text-muted">
        Lorem ipsum dolor sit amet.
      </p>

      <div className="row mt-4">

        <div 
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p><strong>› Birthday:</strong> 12 Feb 2005</p>
          <p><strong>› Website:</strong> www.example.com</p>
          <p><strong>› Phone:</strong> +6354178271</p>
          <p><strong>› City:</strong> Ahmedabad, INDIA</p>
        </div>

        <div 
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p><strong>› Age:</strong> 21</p>
          <p><strong>› Degree:</strong> Master</p>
          <p><strong>› Email:</strong> alpesh@example.com</p>
          <p><strong>› Freelance:</strong> Available</p>
        </div>

      </div>
    </div>

  </div>
</div>

      
<div className="container py-5">
  <div className="row text-center">

    <div 
      className="col-md-3 mb-4"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <i className="bi bi-emoji-smile display-4 text-primary"></i>
      <h1 className="fw-bold mt-3">{clients}</h1>
      <p className="fw-semibold mb-0">Happy Clients</p>
    </div>

    <div 
      className="col-md-3 mb-4"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <i className="bi bi-journal-richtext display-4 text-primary"></i>
      <h1 className="fw-bold mt-3">{projects}</h1>
      <p className="fw-semibold mb-0">Projects</p>
    </div>

    <div 
      className="col-md-3 mb-4"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <i className="bi bi-headset display-4 text-primary"></i>
      <h1 className="fw-bold mt-3">{support}</h1>
      <p className="fw-semibold mb-0">Hours Of Support</p>
    </div>

    <div 
      className="col-md-3 mb-4"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <i className="bi bi-people display-4 text-primary"></i>
      <h1 className="fw-bold mt-3">{workers}</h1>
      <p className="fw-semibold mb-0">Hard Workers</p>
    </div>

  </div>
</div>
     
<div className="container py-5">

  <h2 className="fw-bold" data-aos="fade-up">Skills</h2>

  <div 
    style={{ width: "60px", height: "3px", background: "#0d6efd" }}
    data-aos="fade-up"
    data-aos-delay="100"
  ></div>

  <p 
    className="mt-4 text-muted"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    Necessitatibus eius consequatur ex aliquid fuga eum quidem
  </p>

  <div className="row mt-5">

    <div 
      className="col-md-6"
      data-aos="fade-up"
      data-aos-delay="300"
    >

      <p className="d-flex justify-content-between">
        <span>HTML</span><span>100%</span>
      </p>
      <div className="progress mb-4">
        <div className="progress-bar" style={{ width: "100%" }}></div>
      </div>

      <p className="d-flex justify-content-between">
        <span>CSS</span><span>90%</span>
      </p>
      <div className="progress mb-4">
        <div className="progress-bar" style={{ width: "90%" }}></div>
      </div>

      <p className="d-flex justify-content-between">
        <span>JAVASCRIPT</span><span>75%</span>
      </p>
      <div className="progress mb-4">
        <div className="progress-bar" style={{ width: "75%" }}></div>
      </div>

    </div>

    <div 
      className="col-md-6"
      data-aos="fade-up"
      data-aos-delay="400"
    >

      <p className="d-flex justify-content-between">
        <span>PHP</span><span>80%</span>
      </p>
      <div className="progress mb-4">
        <div className="progress-bar" style={{ width: "80%" }}></div>
      </div>

      <p className="d-flex justify-content-between">
        <span>WORDPRESS</span><span>90%</span>
      </p>
      <div className="progress mb-4">
        <div className="progress-bar" style={{ width: "90%" }}></div>
      </div>

      <p className="d-flex justify-content-between">
        <span>PHOTOSHOP</span><span>55%</span>
      </p>
      <div className="progress mb-4">
        <div className="progress-bar" style={{ width: "55%" }}></div>
      </div>

    </div>

  </div>
</div>

<div className="container py-5" id="Portfilo">

 
  <h2 className="fw-bold" data-aos="fade-up">Portfolio</h2>

  <p 
    className="text-muted" 
    style={{ maxWidth: "700px" }}
    data-aos="fade-up"
    data-aos-delay="100"
  >
    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
  </p>


  <div 
    className="d-flex justify-content-center gap-4 my-4 fw-semibold"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <span className="text-primary">ALL</span>
    <span>APP</span>
    <span>PRODUCT</span>
    <span>BRANDING</span>
    <span>BOOKS</span>
  </div>

  <div className="row g-4">

    
    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
      <img
        src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/app-1.jpg"
        className="img-fluid rounded"
        alt=""
      />
    </div>

    <div className="col-md-4" data-aos="fade-up" data-aos-delay="350">
      <img
        src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/product-1.jpg"
        className="img-fluid rounded"
        alt=""
      />
    </div>

    <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
      <div className="position-relative rounded overflow-hidden">

        <img
          src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/books-2.jpg"
          className="img-fluid w-100"
          alt=""
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <span className="badge bg-info mb-2">Branding 1</span>
          <p className="text-white mb-0">
            Lorem ipsum, dolor sit amet consectetur
          </p>
        </div>

      </div>
    </div>


    <div className="col-md-4" data-aos="fade-up" data-aos-delay="450">
      <img
        src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/branding-2.jpg"
        className="img-fluid rounded"
        alt=""
      />
    </div>

  
    <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
      <img
        src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/product-2.jpg"
        className="img-fluid rounded"
        alt=""
      />
    </div>

   
    <div className="col-md-4" data-aos="fade-up" data-aos-delay="550">
      <img
        src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/books-1.jpg"
        className="img-fluid rounded"
        alt=""
      />
    </div>

  </div>
</div>




<div className="container my-5" id="resume">
  
  
  <h2 className="fw-bold" data-aos="fade-up">Resume</h2>

  <hr 
    style={{ width: "80px", borderTop: "3px solid #0d6efd" }}
    data-aos="fade-up"
    data-aos-delay="100"
  />

  <p 
    className="text-muted"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    Magnum dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
  </p>

  <div className="row mt-4">

    <div 
      className="col-md-5"
      data-aos="fade-up"
      data-aos-delay="300"
    >

      <h4 className="fw-bold">Summary</h4>

      <div className="border-start border-3 ps-3 mb-4">
        <h5 className="fw-bold">BRANDON JOHNSON</h5>
        <p className="fst-italic">
          Innovative and deadline-driven Graphic Designer with 3+ years experience.
        </p>
        <ul>
          <li>Portland par 127, Orlando, FL</li>
          <li>(123) 456-7891</li>
          <li>alice.barkley@example.com</li>
        </ul>
      </div>

      <h4 className="fw-bold">Education</h4>

      <div className="border-start border-3 ps-3">
        <h6 className="fw-bold">MASTER OF FINE ARTS & GRAPHIC DESIGN</h6>
        <small>2015 - 2016</small>
        <p className="text-muted">
          Rochester Institute of Technology, Rochester, NY
        </p>

        <h6 className="fw-bold mt-3">BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h6>
        <small>2010 - 2014</small>
        <p className="text-muted">
          Rochester Institute of Technology, Rochester, NY
        </p>
      </div>

    </div>

  
    <div 
      className="col-md-7"
      data-aos="fade-up"
      data-aos-delay="400"
    >

      <h4 className="fw-bold">Professional Experience</h4>

      <div className="border-start border-3 ps-3 mb-4">
        <h6 className="fw-bold">SENIOR GRAPHIC DESIGN SPECIALIST</h6>
        <small>2019 - Present</small>
        <p className="text-muted">Experion, New York, NY</p>

        <ul>
          <li>Lead in design and development of graphic materials</li>
          <li>Delegate tasks to team members</li>
          <li>Ensure quality and accuracy of design</li>
          <li>Manage budgets from $2,000 - $25,000</li>
        </ul>
      </div>

      <div className="border-start border-3 ps-3">
        <h6 className="fw-bold">GRAPHIC DESIGN SPECIALIST</h6>
        <small>2017 - 2018</small>
        <p className="text-muted">Stepping Stone Advertising, New York, NY</p>

        <ul>
          <li>Developed marketing programs and designs</li>
          <li>Managed multiple projects under pressure</li>
          <li>Consulted with clients</li>
          <li>Created presentations and proposals</li>
        </ul>
      </div>

    </div>

  </div>
</div>





    <section className="py-5 bg-light" id='servies'>
  <div className="container">
    
  
    <div className="mb-5">
      <h2 className="fw-bold" data-aos="fade-up">Services</h2>

      <div 
        className="bg-primary" 
        style={{ width: 60, height: 3 }} 
        data-aos="fade-up"
        data-aos-delay="100"
      />

      <p 
        className="text-muted mt-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem.
      </p>
    </div>

   
    <div className="row">

    
      <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
        <div className="d-flex">
          <div className="bg-primary text-white d-flex align-items-center justify-content-center me-3"
            style={{ width: 60, height: 60, borderRadius: "50%", fontSize: 24 }}>
            💼
          </div>
          <div>
            <h5 className="fw-bold">Lorem Ipsum</h5>
            <p className="text-muted mb-0">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
            </p>
          </div>
        </div>
      </div>

    
      <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
        <div className="d-flex">
          <div className="bg-primary text-white d-flex align-items-center justify-content-center me-3"
            style={{ width: 60, height: 60, borderRadius: "50%", fontSize: 24 }}>
            📄
          </div>
          <div>
            <h5 className="fw-bold">Dolor Sitema</h5>
            <p className="text-muted mb-0">
              Minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
      </div>

     
      <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="500">
        <div className="d-flex">
          <div className="bg-primary text-white d-flex align-items-center justify-content-center me-3"
            style={{ width: 60, height: 60, borderRadius: "50%", fontSize: 24 }}>
            📊
          </div>
          <div>
            <h5 className="fw-bold">Sed ut perspiciatis</h5>
            <p className="text-muted mb-0">
              Duis aute irure dolor in reprehenderit
            </p>
          </div>
        </div>
      </div>

    
      <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="600">
        <div className="d-flex">
          <div className="bg-primary text-white d-flex align-items-center justify-content-center me-3"
            style={{ width: 60, height: 60, borderRadius: "50%", fontSize: 24 }}>
            👥
          </div>
          <div>
            <h5 className="fw-bold">Magni Dolores</h5>
            <p className="text-muted mb-0">
              Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>
      </div>

     
      <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="700">
        <div className="d-flex">
          <div className="bg-primary text-white d-flex align-items-center justify-content-center me-3"
            style={{ width: 60, height: 60, borderRadius: "50%", fontSize: 24 }}>
            ☀️
          </div>
          <div>
            <h5 className="fw-bold">Nemo Enim</h5>
            <p className="text-muted mb-0">
              At vero eos et accusamus et iusto odio
            </p>
          </div>
        </div>
      </div>


      <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="800">
        <div className="d-flex">
          <div className="bg-primary text-white d-flex align-items-center justify-content-center me-3"
            style={{ width: 60, height: 60, borderRadius: "50%", fontSize: 24 }}>
            📅
          </div>
          <div>
            <h5 className="fw-bold">Eiusmod Tempor</h5>
            <p className="text-muted mb-0">
              Et harum quidem rerum facilis est
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<div className="container my-5" id='contact'>


    <h2 className="fw-bold" data-aos="fade-up">Contact</h2>

  <hr 
    style={{ width: "70px", borderTop: "3px solid #0d6efd" }} 
    data-aos="fade-up"
    data-aos-delay="100"
  />

  <p 
    className="text-muted"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
  </p>

  <div className="row mt-4">

    <div 
      className="col-md-5 mb-4"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="p-4 shadow-sm bg-light h-100">

       
        <div className="d-flex mb-4" data-aos="fade-up" data-aos-delay="400">
          <div className="me-3 text-primary fs-4">📍</div>
          <div>
            <h6 className="fw-bold mb-1">Address</h6>
            <p className="mb-0 text-muted">
              Nikol Gam Road, near Sardar Mall, Ahmedabad, Gujarat, India
            </p>
          </div>
        </div>

     
        <div className="d-flex mb-4" data-aos="fade-up" data-aos-delay="500">
          <div className="me-3 text-primary fs-4">📞</div>
          <div>
            <h6 className="fw-bold mb-1">Call Us</h6>
            <p className="mb-0 text-muted">+6354178271</p>
          </div>
        </div>

        <div className="d-flex mb-4" data-aos="fade-up" data-aos-delay="600">
          <div className="me-3 text-primary fs-4">✉️</div>
          <div>
            <h6 className="fw-bold mb-1">Email Us</h6>
            <p className="mb-0 text-muted">alpesh@example.com</p>
          </div>
        </div>

     
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Ahmedabad%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={{ border: 0, width: "100%", height: "250px" }}
          allowFullScreen=""
          loading="lazy"
          data-aos="fade-up"
          data-aos-delay="700"
        ></iframe>

      </div>
    </div>

    
    <div 
      className="col-md-7"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="p-4 shadow-sm bg-light">

        <form>
          <div className="row">
            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="500">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="600">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" />
            </div>
          </div>

          <div className="mb-3" data-aos="fade-up" data-aos-delay="700">
            <label className="form-label">Subject</label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3" data-aos="fade-up" data-aos-delay="800">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="900">
            <button type="submit" className="btn btn-primary px-4">
              Send Message
            </button>
          </div>
        </form>

      </div>
    </div>

  </div>
</div>



   <footer className="bg-light py-4 text-center">
      <div className="container">
        
        <p className="mb-1">
          © Copyright <strong>iPortfolio</strong> All Rights Reserved
        </p>

        <p className="mb-0">
          Designed by{" "}
          <a href="#" className="text-primary text-decoration-none">
            BootstrapMade
          </a>{" "}
          developed by{" "}
          <a href="#" className="text-primary text-decoration-none">
         ALPESH KHANT
          </a>
        </p>

      </div>
    </footer>

      </div>
    </div>

 
    
</>
  );
}
