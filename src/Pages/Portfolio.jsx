import React from 'react'
import ProjectCard from '../components/Projects'


function Portfolio() {
  const projects = [
    {
        title: 'Tech Blog',
        description: '',
        imageUrl: '/techblog.png',
        projectUrl: 'https://github.com/dhiduchick/Hiduchick-Tech-Blog.git'
    },
    {
      title: 'Culinary Canvas',
      description: '',
      imageUrl: '/homepageculinary.png',
      projectUrl: 'https://evening-reef-48573-57db96f3f837.herokuapp.com/'
    },
    {
        title: 'Note Taker',
        description: '',
        imageUrl: '/notetaker.png',
        projectUrl: 'https://github.com/dhiduchick/Hiduchick-Note-Taker.git'  
    },
    {
        title: 'Password Generator',
        description: '',
        imageUrl: '/passwordgen.png',
        projectUrl: 'https://dhiduchick.github.io/Hiduchick-Password-Generator/'
      },
      {
        title: 'README Generator',
        description: '',
        imageUrl: '/readme-preview.png',
        projectUrl: 'https://github.com/dhiduchick/Hiduchick-README-Generator.git'
      },
      {
        title: 'Cosmic Counsel',
        description: '',
        imageUrl: '/StartPageCC.png',
        projectUrl: 'https://conartisttt.github.io/Cosmic-Counsel/'
      },
      {
        title: 'Weather Dashbord',
        description: '',
        imageUrl: '/weatherdash.png',
        projectUrl: 'https://dhiduchick.github.io/Hiduchick-Weather-Dashboard/'
      },
      {
        title: 'Coding Quiz',
        description: '',
        imageUrl: '/codingquiz.png',
        projectUrl: 'https://dhiduchick.github.io/Hiduchick-Coding-Quiz/'
      },
      {
        title: 'Work Day Scheduler',
        description: '',
        imageUrl: '/workday.png',
        projectUrl: 'https://dhiduchick.github.io/Hiduchick-Day-Scheduler/'
    }
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center text-white mb-4">Portfolio Projects</h1>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6 d-flex" key={index} style = {{paddingBottom: 50}}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}


export default Portfolio;