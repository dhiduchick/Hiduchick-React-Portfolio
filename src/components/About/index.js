import headshot from "../../assets/images/banner-for-portfolio.png"

const About = () => {
  return (
    <section className="content" id="about">  
      <h1>About Me</h1>
      <div className="about-me">
        <div>
          <p>Hi, I'm Daelyn.</p>
          <p> 
            I am a detail oriented full-stack developer with experience in responsive web design and development, web accessibility, digital activation, project management and design experimentation. 
          </p>
          <p>
            I completed a Full-Stack Web Development Bootcamp through The University New Hamshire in March 2024. I also have a Bachelors of Science in Forensic Science from Roger Williams Univeristy in Bristol,RI.  
          </p>
        </div>
        <img src={headshot} alt="photo banner of Daelyn Hiduchick" />
      </div>
    </section>
  )
}

export default About;
