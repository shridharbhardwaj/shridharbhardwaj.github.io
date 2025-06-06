import React from 'react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "📈 Stock Market Kafka Simulation",
      description: "Real-time Data Engineering | End-to-end data pipeline using Kafka for real-time stock market data processing and analysis with Python.",
      image: "images/proj_1.jpg",
      link: "https://github.com/shree-bd/stock_market_kafka_simulation",
      technologies: ["Kafka", "Python", "Jupyter"]
    },
    {
      title: "🤖 Face Emotion Recognition AI",
      description: "Computer Vision & ML | AI model for recognizing emotions from facial expressions using deep learning and computer vision techniques.",
      image: "images/proj_5.jpg",
      link: "https://github.com/shree-bd/FaceEmotion-Recognition_System-AI-ML-",
      technologies: ["AI/ML", "Python", "OpenCV"]
    },
    {
      title: "💰 Finance Data Analysis",
      description: "Data Analytics | Comprehensive financial data analysis using Python, Pandas, and visualization libraries to extract valuable business insights.",
      image: "images/proj_1.jpg",
      link: "https://github.com/shree-bd/Finance_Data_Analysis",
      technologies: ["Python", "Pandas", "Jupyter"]
    },
    {
      title: "🏪 Retail Inventory Dashboard",
      description: "Business Intelligence | End-to-end data engineering project with interactive Power BI dashboard for retail inventory management and analytics.",
      image: "images/proj_1.jpg",
      link: "https://github.com/shree-bd/Retail-Inventory-Analytics-Dashboard",
      technologies: ["Power BI", "Python", "SQL"]
    },
    {
      title: "📚 Book Recommender System",
      description: "Machine Learning | Intelligent book recommendation system using collaborative filtering and content-based algorithms with modern web interface.",
      image: "images/proj_4.jpg",
      link: "https://github.com/shree-bd/Book-Recommender-System",
      technologies: ["ML", "Python", "Scikit-learn"]
    },
    {
      title: "🎮 Wordle Game API",
      description: "Backend API | RESTful API for the popular Wordle game with user management, game logic, and scoring system. Built with modern backend technologies.",
      image: "images/proj_1.jpg",
      link: "https://github.com/shree-bd/Wordle-game-API",
      technologies: ["API", "Python", "REST"]
    },
    {
      title: "🤖 NoteAI - AI-Powered Note-Taking",
      description: "AI Integration | Intelligent note-taking application with AI-powered features including smart auto-tagging, content enhancement, and smart title generation using OpenAI.",
      image: "images/proj_1.jpg",
      link: "https://github.com/shree-bd/NoteAI",
      technologies: ["React", "Django", "AI"]
    },
    {
      title: "🔐 Golang User Management System",
      description: "Backend Development | Secure user management system built with Go, featuring JWT authentication, MongoDB integration, and RESTful API design with modern web interface.",
      image: "images/proj_1.jpg",
      link: "https://github.com/shree-bd/golang-user-management",
      technologies: ["Go", "MongoDB", "JWT"]
    },
    {
      title: "🎥 YouTube Manager",
      description: "NoSQL Database | YouTube content management system with MongoDB for storing and managing video metadata with full CRUD operations.",
      image: "images/proj_1.jpg",
      link: "https://github.com/shree-bd/YTManager_mongoDB",
      technologies: ["MongoDB", "Python", "NoSQL"]
    },
    {
      title: "🤖 Gemini AI Clone",
      description: "AI Integration | Modern AI chatbot interface clone with responsive design and API integration for conversational AI experiences.",
      image: "images/proj_1.jpg",
      link: "https://github.com/shree-bd/Gemini-Clone",
      technologies: ["AI", "React", "JavaScript"]
    },
    {
      title: "🎯 Tic-Tac-Toe Game",
      description: "Interactive Web Game | Classic Tic-Tac-Toe game with modern UI, game logic, and interactive features built with vanilla JavaScript.",
      image: "images/proj_1.jpg",
      link: "https://github.com/shree-bd/Tic-Tac-Toe-Game",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  const getBadgeClass = (tech) => {
    const techClasses = {
      'Django': 'badge-primary',
      'React': 'badge-info',
      'JavaScript': 'badge-success',
      'Kafka': 'badge-warning',
      'Python': 'badge-primary',
      'Jupyter': 'badge-info',
      'AI/ML': 'badge-danger',
      'OpenCV': 'badge-secondary',
      'Pandas': 'badge-info',
      'Power BI': 'badge-warning',
      'SQL': 'badge-info',
      'ML': 'badge-danger',
      'Scikit-learn': 'badge-success',
      'API': 'badge-success',
      'REST': 'badge-info',
      'JWT': 'badge-warning',
      'MongoDB': 'badge-success',
      'NoSQL': 'badge-info',
      'AI': 'badge-danger',
      'HTML5': 'badge-warning',
      'CSS3': 'badge-info',
      'Go': 'badge-info'
    };
    return techClasses[tech] || 'badge-secondary';
  };

  return (
    <section className="ftco-section" id="project-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Featured Projects</h2>
            <p>
              🚀 Showcasing full-stack applications, data engineering pipelines, AI/ML models, and cloud-native solutions 
              using modern technologies like Python, Java, React, AWS, and more.
            </p>
          </div>
        </div>
        
        {/* Projects Grid */}
        {Array.from({ length: Math.ceil(projects.length / 3) }, (_, rowIndex) => (
          <div key={rowIndex}>
            <div className="row d-flex">
              {projects.slice(rowIndex * 3, (rowIndex + 1) * 3).map((project, index) => (
                <div key={index} className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry justify-content-end">
                    <a href={project.link} className="block-20 zoom-effect" style={{
                      backgroundImage: `url('${project.image}')`
                    }}>
                    </a>
                    <div className="text mt-3 float-right d-block">
                      <h3 className="heading">
                        <a href={project.link}>{project.title}</a>
                      </h3>
                      <p>
                        <strong>{project.description.split(' | ')[0]}</strong> | {project.description.split(' | ')[1]}
                      </p>
                      <div className="tech-stack">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={`badge ${getBadgeClass(tech)}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {rowIndex < Math.ceil(projects.length / 3) - 1 && <br />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 