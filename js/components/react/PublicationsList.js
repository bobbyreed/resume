//Component for displaying publications and presentations

const PublicationsList = () => {
  // Publications and presentations data from your CV
  const publications = [
    {
      title: "Plain Language Workshop Descriptions",
      type: "Article",
      publisher: "ACRL News",
      year: "2024",
      link: "https://crln.acrl.org/index.php/crlnews/article/view/26486",
      tags: ["Library Science", "Accessibility"]
    },
    {
      title: "AI in Libraries",
      type: "Presentation",
      publisher: "Oklahoma Academic Library Directors Council (OCALD)",
      year: "2024",
      link: "https://www.youtube.com/watch?v=EFEg1V1leWs",
      tags: ["AI", "Library Technology", "Invited Talk"]
    },
    {
      title: "OU Libraries Technology Rodeo",
      type: "Conference Presentation",
      publisher: "Oklahoma Library Association/Mountain Plains Library Association",
      year: "2023",
      link: "",
      tags: ["Library Technology", "Emerging Tech"]
    },
    {
      title: "Keep it Clean",
      type: "Book Chapter",
      publisher: "32 Virtual, Augmented, and Mixed Reality Programs for Libraries, ALA",
      year: "2021",
      link: "https://www.alastore.ala.org/VRprograms",
      tags: ["VR/AR", "Library Programs"]
    },
    {
      title: "State of Virtual Reality in the Academy",
      type: "Conference Presentation",
      publisher: "Charleston Conference",
      year: "2020",
      link: "https://mymedia.ou.edu/media/Virtual+Reality+and+Libraries+in+a+post-COVID+world+-+Charleston+Conference+2020/1_tzf5nnla",
      tags: ["VR", "Academic Libraries", "Invited Talk"]
    },
    {
      title: "Virtual Reality Research in Native Country",
      type: "Conference Presentation",
      publisher: "Educators in VR Conference",
      year: "2020",
      link: "",
      tags: ["VR", "Cultural Heritage", "Indigenous Research"]
    },
    {
      title: "Emerging Technologies Librarians: What are They and Who Needs Them?",
      type: "Conference Presentation",
      publisher: "American Library Association Conference",
      year: "2019",
      link: "https://mymedia.ou.edu/media/Emerging+Technologies+Librarians+-+What+are+they+and+who+needs+themF+-+ALA+Annual+%2719+-+Washington+D.C./1_lhjhw4jt",
      tags: ["Library Technology", "Professional Development"]
    }
  ];

  return (
    <div id="publications" className="portfolio-section">
      <h2>Publications & Presentations</h2>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div className="publication-item" key={index}>
            <h3>{pub.title}</h3>
            <div className="publication-meta">
              <span>{pub.type} | {pub.publisher}</span>
              <span>{pub.year}</span>
            </div>
            <div className="publication-tags">
              {pub.tags.map((tag, i) => (
                <span className="publication-tag" key={i}>{tag}</span>
              ))}
            </div>
            {pub.link && (
              <div style={{marginTop: '10px'}}>
                <a href={pub.link} target="_blank" className="publication-link">
                  View Resource <i className="fa fa-external-link"></i>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Render the component
ReactDOM.render(<PublicationsList />, document.getElementById('publications-section'));