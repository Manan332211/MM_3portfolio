import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Glopbe Pvt Ltd</h5>
              </div>
              <h3>11/2024-PRESENT</h3>
            </div>
            <p>
              Backend Architecture: Engineered scalable, secure solutions using PHP (Laravel & CodeIgniter) for high-performance dynamic websites. API & Headless CMS: Developed and integrated REST APIs to bridge WordPress backends with React frontends for enhanced flexibility. Custom CMS: Leveraged ACF to build tailored content management experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Andropedia Infotech</h5>
              </div>
              <h3>05/2023-10/2024</h3>
            </div>
            <p>
              Development: Engineered responsive UI/UX using HTML, CSS, JavaScript, and PHP. End-to-End Delivery: Managed full-cycle workflows—from design and content to functional coding. Performance: Consistently met tight deadlines while ensuring high code quality and cross-browser compatibility. Collaboration: Partnered with cross-functional teams to translate client requirements into high-performing web solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science</h4>
                <h5>MKBU</h5>
              </div>
              <h3>08/2017-05/2020</h3>
            </div>
            <p>
              Completed Bachelor of Science at Maharaja Krishnakumarsinhji Bhavnagar University.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
