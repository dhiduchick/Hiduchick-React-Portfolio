import React from 'react'


function ProjectCard({ title, imageUrl, projectUrl }) {
  return (
    <div className="card bg-dark text-white flex-fill">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        {/* Ensure that the image is wrapped within the card-body */}
        <div className="card-body p-0">
          <img src={imageUrl} className="card-img" alt={title} />
          <div className="card-img d-flex align-items-end p-0">
            <h5 className="text-white w-100 rounded-pill text-center bg-black bg-opacity-75 py-2">{title}</h5>
          </div>
        </div>
      </a>
    </div>
  )
}


export default ProjectCard 