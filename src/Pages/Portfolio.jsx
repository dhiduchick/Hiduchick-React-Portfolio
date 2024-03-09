import React from 'react'
import ProjectCard from '../components/Projects'


function Portfolio() {
  const projects = [
    {
        title: 'Tech Blog',
        description: '',
        imageUrl: './public/techblog.png',
        projectUrl: 'https://github.com/dhiduchick/Hiduchick-Tech-Blog.git'
    },
    {
      title: 'Culinary Canvas',
      description: '',
      imageUrl: './public/homepageculinary.png',
      projectUrl: 'https://evening-reef-48573-57db96f3f837.herokuapp.com/'
    },
    {
        title: 'Note Taker',
        description: '',
        imageUrl: './public/notetaker.png',
        projectUrl: 'https://github.com/dhiduchick/Hiduchick-Note-Taker.git'  
    },
    {
        title: 'Password Generator',
        description: '',
        imageUrl: './public/passwordgen.png',
        projectUrl: 'https://dhiduchick.github.io/Hiduchick-Password-Generator/'
      },
      {
        title: 'README Generator',
        description: '',
        imageUrl: './public/readme-preview.png',
        projectUrl: 'https://github.com/dhiduchick/Hiduchick-README-Generator.git'
      },
      {
        title: 'Cosmic Counsel',
        description: '',
        imageUrl: './public/StartPageCC.png',
        projectUrl: 'https://conartisttt.github.io/Cosmic-Counsel/'
      },
      {
        title: 'Weather Dashbord',
        description: '',
        imageUrl: './public/weatherdash.png',
        projectUrl: 'https://dhiduchick.github.io/Hiduchick-Weather-Dashboard/'
      },
      {
        title: 'Coding Quiz',
        description: '',
        imageUrl: './public/codingquiz.png',
        projectUrl: 'https://dhiduchick.github.io/Hiduchick-Coding-Quiz/'
      },
      {
        title: 'Work Day Scheduler',
        description: '',
        imageUrl: './public/workday.png',
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