//Component for downloading resume and CV

const DownloadResume = () => {
  // This function would handle generating and downloading dynamically rendered resumes
  // For now we'll just link to static files
  const downloadFile = (type, format) => {
    // In a real implementation, you might want to track downloads with analytics
    console.log(`Downloading ${type} in ${format} format`);
    
    // Mapping of file types to their paths
    const filePaths = {
      'resume-pdf': 'files/Bobby_Reed_Resume.pdf',
      'resume-docx': 'files/Bobby_Reed_Resume.docx',
      'cv-pdf': 'files/Bobby_Reed_CV.pdf',
      'cv-docx': 'files/Bobby_Reed_CV.docx',
      'academic-cv-pdf': 'files/Bobby_Reed_Academic_CV.pdf',
      'academic-cv-docx': 'files/Bobby_Reed_Academic_CV.docx'
    };
    
    // Construct the file key and get the path
    const fileKey = `${type}-${format}`;
    const filePath = filePaths[fileKey];
    
    // Create a link element and trigger the download
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="download" className="portfolio-section">
      <h2>Download Resume & CV</h2>
      <p style={{color: '#846449', maxWidth: '800px', margin: '0 auto 30px auto', textAlign: 'center'}}>
        Select a version that best fits your needs. Each document highlights my professional journey,
        skills, and accomplishments in different formats and levels of detail.
      </p>
      
      <div className="download-container">
        {/* Professional Resume */}
        <div className="download-card">
          <div className="download-icon">
            <i className="fa fa-file-text-o"></i>
          </div>
          <h3 className="download-title">Professional Resume</h3>
          <p className="download-description">
            A concise, 1-2 page summary of my professional experience, focusing on my 
            roles in technology education, emerging technologies leadership, and 
            innovative project management.
          </p>
          <button 
            className="download-button" 
            onClick={() => downloadFile('resume', 'pdf')}
          >
            Download Resume
          </button>
          <div className="download-format-options">
            <a href="files/Bobby_Reed_Resume.pdf" download className="format-option">PDF</a>
            <a href="files/Bobby_Reed_Resume.docx" download className="format-option">DOCX</a>
          </div>
        </div>
        
        {/* Comprehensive CV */}
        <div className="download-card">
          <div className="download-icon">
            <i className="fa fa-file-o"></i>
          </div>
          <h3 className="download-title">Comprehensive CV</h3>
          <p className="download-description">
            A detailed curriculum vitae listing all professional roles, projects, 
            publications, grants, and technical expertise. Ideal for those interested 
            in a complete overview of my career accomplishments.
          </p>
          <button 
            className="download-button" 
            onClick={() => downloadFile('cv', 'pdf')}
          >
            Download CV
          </button>
          <div className="download-format-options">
            <a href="files/Bobby_Reed_CV.pdf" download className="format-option">PDF</a>
            <a href="files/Bobby_Reed_CV.docx" download className="format-option">DOCX</a>
          </div>
        </div>
        
        {/* Academic CV */}
        <div className="download-card">
          <div className="download-icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <h3 className="download-title">Academic CV</h3>
          <p className="download-description">
            A specialized curriculum vitae emphasizing teaching experience, academic 
            publications, presentations, and research projects. Tailored for academic 
            positions and scholarly collaborations.
          </p>
          <button 
            className="download-button" 
            onClick={() => downloadFile('academic-cv', 'pdf')}
          >
            Download Academic CV
          </button>
          <div className="download-format-options">
            <a href="files/Bobby_Reed_Academic_CV.pdf" download className="format-option">PDF</a>
            <a href="files/Bobby_Reed_Academic_CV.docx" download className="format-option">DOCX</a>
          </div>
        </div>
      </div>
      
      {/* Message about customized resumes */}
      <p style={{color: '#846449', maxWidth: '800px', margin: '30px auto 0 auto', textAlign: 'center', fontSize: '0.9rem'}}>
        <i className="fa fa-info-circle"></i> The documents provided are general versions. For specific opportunities,
        I typically create customized resumes highlighting relevant experience and skills.
      </p>
    </div>
  );
};

// Render the component
ReactDOM.render(<DownloadResume />, document.getElementById('download-section'));