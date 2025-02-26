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
                <h4>Organizer @HackForce'25</h4>
                <h5>Geek Room</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Spearheaded the organization and execution of a mini
hackathon.
Developed Strategies for participant engagement and event
Management
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coordinator @Placement Cell at JIMSEMTC</h4>
                <h5>JIMSEMTC</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Organized and led a successful placement drive in collaboration with Josh Technologies, facilitating recruitment opportunities for students.
            Coordinated with the company’s HR team to understand hiring requirements and aligned student profiles accordingly.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Management Head </h4>
                <h5>Navras</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Lead and managed a dynamic team to organize and execute multiple cultural events.
Directed the planning, budgeting, and coordination of various cultural activities.
Fostered partnerships with local businesses, sponsors, and other cultural organizations to enhance event quality and expand reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
