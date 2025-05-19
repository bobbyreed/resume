//Component for showcasing major projects with details

const ProjectsShowcase = () => {
  // Project data from your CV
  const projects = [
    {
      title: "Flybrarians",
      year: "2022",
      organization: "University of Oklahoma Libraries",
      image: "images/projects/flybrarians.jpg", // Placeholder, you'll need to add these images
      description: "Aviation training simulator using 360° video/audio capture for training first-time pilots.",
      technologies: ["Unity", "360° Media", "VR Development"],
      impact: "Implemented for pilot training programs at the University of Oklahoma."
    },
    {
      title: "Digital Deep Deuce 1949",
      year: "2021",
      organization: "University of Oklahoma Libraries",
      image: "images/projects/deepdeuce.jpg",
      description: "Immersive digital recreation of the historic Deep Deuce neighborhood of Oklahoma City.",
      technologies: ["Unity", "Historical Research", "3D Modeling"],
      impact: "Partnership with Metropolitan Library System for cultural heritage preservation."
    },
    {
      title: "Patented Nasopharyngeal Swab",
      year: "2020",
      organization: "University of Oklahoma",
      image: "images/projects/nasopharyngeal.jpg",
      description: "Novel 3D printed swab design for COVID-19 testing, resulting in a patent.",
      technologies: ["3D Modeling", "Medical Prototyping", "Rapid Response"],
      impact: "Implemented for clinical testing during the pandemic."
    },
    {
      title: "Web-based AR Library Scavenger Hunt",
      year: "2020",
      organization: "University of Oklahoma Libraries",
      image: "images/projects/ar-scavenger.jpg",
      description: "Augmented reality experience for pandemic-safe library tours.",
      technologies: ["Web AR", "QR Implementation", "UX Design"],
      impact: "Created a self-guided exploratory experience for new students."
    },
    {
      title: "Oklahoma Virtual Academic Laboratory (OVAL)",
      year: "2018-2023",
      organization: "University of Oklahoma",
      image: "images/projects/oval.jpg",
      description: "Multi-campus VR system supporting research and education across disciplines.",
      technologies: ["Unity", "VR Development", "Academic Integration"],
      impact: "Served 1000+ students across 12 colleges and multiple campuses."
    },
    {
      title: "3D Printed Ear Simulator",
      year: "2019",
      organization: "University of Oklahoma",
      image: "images/projects/ear-simulator.jpg",
      description: "Medical training device developed with audiology faculty for simulating ear examinations.",
      technologies: ["Photogrammetry", "3D Printing", "Medical Prototyping"],
      impact: "Pilot for process of using 3D printing to create medical simulators."
    }
  ];

  return (
    <div id="projects" className="portfolio-section">
      <h2>Notable Projects & Innovations</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
              onError={(e) => {e.target.src = "images/placeholder.jpg"}} // Fallback image if project image doesn't exist
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-org">{project.organization} | {project.year}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <p><strong>Impact:</strong> {project.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Render the component
ReactDOM.render(<ProjectsShowcase />, document.getElementById('projects-section'));