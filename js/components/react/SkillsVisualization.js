//Component for visualizing skills and education

const SkillsVisualization = () => {
  // Education data
  const education = [
    {
      degree: "M.L.I.S., Technology Librarianship",
      institution: "University of Oklahoma",
      year: "2019"
    },
    {
      degree: "M.A., 20th & 21st Century Studies in Literature",
      institution: "University of Central Oklahoma",
      year: "2014"
    },
    {
      degree: "B.A., English-Creative Studies",
      institution: "University of Central Oklahoma",
      year: "2010"
    }
  ];
  
  // Certifications data
  const certifications = [
    {
      title: "sUAS Remote Pilot Certification",
      organization: "Federal Aviation Administration",
      year: "2018"
    },
    {
      title: "3D Printing and Modeling Instructor Certification",
      organization: "Digital Harbor Foundation",
      year: "2017"
    },
    {
      title: "Oklahoma State Teaching Certification",
      organization: "Oklahoma Department of Education",
      year: "2015",
      notes: "[expired]"
    }
  ];

  // Skills data with proficiency levels (1-5)
  const skillCategories = [
    {
      category: "3D Technologies",
      skills: [
        { name: "3D Modeling (Fusion 360, Blender)", level: 5 },
        { name: "3D Printing (SLA, FDM)", level: 5 },
        { name: "Photogrammetry", level: 4 },
        { name: "3D Scanning", level: 4 }
      ]
    },
    {
      category: "Development",
      skills: [
        { name: "Unity", level: 4 },
        { name: "Web Development (HTML/CSS/JS)", level: 4 },
        { name: "React", level: 3 },
        { name: "WordPress", level: 4 }
      ]
    },
    {
      category: "VR/AR Technologies",
      skills: [
        { name: "VR Development", level: 5 },
        { name: "360° Media Creation", level: 4 },
        { name: "WebXR/Web-based AR", level: 3 },
        { name: "Oculus/Meta Quest Development", level: 4 }
      ]
    },
    {
      category: "Leadership & Management",
      skills: [
        { name: "Team Management", level: 5 },
        { name: "Grant Writing & Management", level: 4 },
        { name: "Project Management", level: 5 },
        { name: "Instructional Design", level: 4 }
      ]
    }
  ];

  return (
    <div id="skills" className="portfolio-section">
      <h2>Education & Skills</h2>
      
      {/* Education Section */}
      <h3 style={{color: '#846449', marginTop: '30px'}}>Education</h3>
      <div style={{marginBottom: '30px'}}>
        {education.map((edu, index) => (
          <div key={index} style={{marginBottom: '15px'}}>
            <h4 style={{color: '#d88948', margin: '0 0 5px 0'}}>{edu.degree}</h4>
            <p style={{margin: '0', color: '#846449'}}>{edu.institution}, {edu.year}</p>
          </div>
        ))}
      </div>
      
      {/* Certifications Section */}
      <h3 style={{color: '#846449', marginTop: '30px'}}>Certifications</h3>
      <div style={{marginBottom: '30px'}}>
        {certifications.map((cert, index) => (
          <div key={index} style={{marginBottom: '15px'}}>
            <h4 style={{color: '#d88948', margin: '0 0 5px 0'}}>{cert.title} {cert.notes && <span style={{fontSize: '0.9em', fontStyle: 'italic'}}>{cert.notes}</span>}</h4>
            <p style={{margin: '0', color: '#846449'}}>{cert.organization}, {cert.year}</p>
          </div>
        ))}
      </div>
      
      {/* Skills Section */}
      <h3 style={{color: '#846449', marginTop: '30px'}}>Technical Skills</h3>
      <div className="skills-container">
        {skillCategories.map((category, catIndex) => (
          <div className="skill-category" key={catIndex}>
            <h3>{category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{width: `${skill.level * 20}%`}} 
                      title={`Proficiency: ${skill.level}/5`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Render the component
ReactDOM.render(<SkillsVisualization />, document.getElementById('skills-section'));