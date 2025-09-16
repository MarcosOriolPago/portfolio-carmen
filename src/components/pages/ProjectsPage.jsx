import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Sustainable Housing Complex",
      type: "Thesis Project",
      description: "Eco-friendly residential design incorporating renewable energy and sustainable materials.",
      tags: ["Sustainable Design", "Residential", "BIM Modeling"],
      icon: "fas fa-home",
      featured: true
    },
    {
      title: "Cultural Center Design",
      type: "Studio Project",
      description: "Community-focused cultural center with flexible spaces for events and exhibitions.",
      tags: ["Public Space", "Cultural"],
      icon: "fas fa-building"
    },
    {
      title: "Urban Park Pavilion",
      type: "Competition Entry",
      description: "Minimalist pavilion design harmonizing with natural landscape elements.",
      tags: ["Landscape", "Pavilion"],
      icon: "fas fa-tree"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="projects-page"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className="page-header" variants={projectVariants}>
        <h2>Featured Projects</h2>
        <div className="header-line"></div>
      </motion.div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className={`project-item ${project.featured ? 'featured' : ''}`}
            variants={projectVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="project-image">
              <div className="image-placeholder">
                <motion.i 
                  className={project.icon}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </div>
              <div className="image-overlay">
                <motion.button 
                  className="view-project"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tagIndex}
                    className="tag"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(139, 69, 19, 0.3)"
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;