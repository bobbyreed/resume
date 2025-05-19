//Component for displaying professional experience in a timeline format

const ExperienceTimeline = () => {
  // State to track which items are expanded
  const [expandedItems, setExpandedItems] = React.useState({});
  
  // Toggle expanded state for a specific item
  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // Experience data from your CV
  const experiences = [
    {
      title: "Computer Science Instructor",
      organization: "Oklahoma City University",
      period: "2024-Present",
      description: "Teaching undergraduate and graduate software engineering, web development, and mathematics courses.",
      highlights: [
        "Developing curriculum for game development and web programming",
        "Mentoring students through graduate thesis projects",
        "Teaching courses across multiple departments with high enrollment rates",
        "Managing course schedules across multiple departments"
      ]
    },
    {
      title: "Librarian",
      organization: "Rose State College",
      period: "2023-2024",
      description: "Provided research and information literacy support to college community.",
      highlights: [
        "Collaborated with faculty to integrate information resources into curriculum",
        "Organized 'OU Libraries Technology Rodeo' for Oklahoma Library Association conference",
        "Provided research and information literacy support"
      ]
    },
    {
      title: "Head of Emerging Technologies",
      organization: "University of Oklahoma Libraries",
      period: "2019-2023",
      description: "Led team implementing cutting-edge technologies to support research and education.",
      highlights: [
        "Led team of librarians, developers, and student employees",
        "Secured and managed multiple grants including IMLS-Delaware Nation",
        "Served on OU Libraries' Senior Management Team (2019-2021)",
        "Directed COVID-19 response initiatives resulting in two patented medical devices",
        "Established multiple makerspaces across campus serving 1000+ students",
        "Directed the Oklahoma Virtual Academic Laboratory (OVAL)"
      ]
    },
    {
      title: "Emerging Technologies Librarian",
      organization: "University of Oklahoma Libraries",
      period: "2018-2019",
      description: "Established new library spaces and maintained emerging technology infrastructure.",
      highlights: [
        "Established Couch 3D Printing Lab in freshman residence hall",
        "Developed campus-wide 3D printing services across three locations",
        "Created VR visualization projects with architecture, medicine, and social sciences",
        "Maintained emerging technologies equipment fleet"
      ]
    },
    {
      title: "Learning and Development Specialist",
      organization: "Metropolitan Library System",
      period: "2017-2018",
      description: "Implemented learning management system and developed training for 400+ employees.",
      highlights: [
        "Led RFP process and implemented learning management system",
        "Developed METRO Way customer service training program",
        "Created SCORM-compliant e-learning content",
        "Designed and delivered staff development programs"
      ]
    },
    {
      title: "Library Events Coordinator",
      organization: "Metropolitan Library System",
      period: "2016-2017",
      description: "Coordinated programming for multiple library branches.",
      highlights: [
        "Founded Metropolitan Library System Literary Magazine",
        "Organized Metropolitan Library System Literary Festival",
        "Managed AV systems throughout main library location"
      ]
    }
  ];

  return (
    <div id="experience" className="portfolio-section">
      <h2>Professional Experience</h2>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className={`timeline-content ${expandedItems[index] ? 'expanded' : ''}`}>
              <h3>{exp.title}</h3>
              <h4>{exp.organization} | {exp.period}</h4>
              <p>{exp.description}</p>
              <button className="read-more-btn" onClick={() => toggleExpand(index)}>
                {expandedItems[index] ? 'Read Less' : 'Read More'}
              </button>
              <div className="expandable-content" style={{ maxHeight: expandedItems[index] ? '500px' : '0' }}>
                <ul>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Render the component
ReactDOM.render(<ExperienceTimeline />, document.getElementById('experience-section'));