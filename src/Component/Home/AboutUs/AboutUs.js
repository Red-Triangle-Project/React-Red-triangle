import jafar2 from '../../assets/img/jafar2.PNG';
import moayad from '../../assets/img/moayad.png';
import ibraheem from '../../assets/img/ibraheem.png';
import Abdelrahman from '../../assets/img/abed.png';
import noor from '../../assets/img/noor.png';
import React, { useState } from 'react';
import './AboutUs.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Jafar Ramadan',
      role: 'Software Engineer',
      description: 'As a software engineer with a Bachelors degree, I specialize in full-stack development, particularly with .NET and React. I excel in crafting robust applications that leverage these frameworks for seamless user experiences and optimized performance.',
      image: jafar2,
      facebook: 'https://www.facebook.com/share/nkJCknGji5xeSCQu/?mibextid=LQQJ4d',
      instagram: 'https://www.instagram.com/jj3ffr?igsh=MTUyY2s2eDZrcHdyMQ%3D%3D&utm_source=qr',
      linkedin: 'https://www.linkedin.com/in/jafar-ramadan-648134280/',
      github: 'https://github.com/jafarramadan'
    },
    {
      name: 'Moayad Hamdan',
      role: 'Software Engineer',
      description: 'Experienced web developer at all stages of the development cycle for web projects. Familiar with many programming languages including C#, JAVA, JS, and MySQL. Strong background',
      image: moayad,
      facebook: 'https://www.facebook.com/sheckoo.hamdan?mibextid=LQQJ4d',
      instagram: 'https://www.instagram.com/moayad_hamdan22?igsh=amhxZGRiMzNqejBn&utm_source=qr',
      linkedin: 'https://www.linkedin.com/in/moayad-hamdan-625bab1b3/',
      github: 'https://github.com/Moayadhamdan'
    },
    {
      name: 'Ibrahim Nemer',
      role: 'Electrical Engineer',
      description: 'Leveraging a foundation in Electrical Engineering and a subsequent year of industry experience, I transitioned my career path to pursue a passion for software development. I am currently honing my programming skills and contributing to innovative projects within the technology sector',
      image: ibraheem,
      facebook: 'https://www.facebook.com/IbrahimNr14?mibextid=LQQJ4d',
      instagram: 'https://www.instagram.com/ibrahim_nr14?igsh=MWNncndscDU1Z2NrbQ%3D%3D&utm_source=qr',
      linkedin: 'https://www.linkedin.com/in/ibrahim-nimer-19275524b/',
      github: 'https://github.com/IbrahimNimer'
    },
    {
      name: 'Abdelrahman Radwan',
      role: 'Software Engineer',
      description: 'I have a Diploma degree in software engineering and am an expert in full-stack development, especially with.NET and React. I am great at building solid applications that take advantage of these frameworks to provide fluid user interfaces and peak performance.',
      image: Abdelrahman,
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/in/abed-al-rahman-radwan-531b572a2/',
      github: 'https://github.com/Abed1313'
    },
    {
      name: 'Noor Albonne',
      role: 'Computer Scientist',
      description: ' I am a computer scientist graduate from Al-Balqaa Applied University. I am passionate about coding and interested in collaborative projects',
      image: noor,
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/in/noor-albonne-7705441b7/',
      github: 'https://github.com/nooralbonne'
    }
  ];

  const [expandedCards, setExpandedCards] = useState({});
  const toggleDescription = (index) => {
    setExpandedCards(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="about-us" id="about-us">
      <h1>About Us</h1>
<p>Triangle is a comprehensive web application designed for the sale and rental of properties.<br />
The project utilizes modern web technologies to deliver an efficient and scalable solution for real estate transactions.</p>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div className="card" key={member.name}>
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>
              {expandedCards[index] ? member.description : member.description.slice(0, 15)}
              {member.description.length > 15 && (
                <span onClick={() => toggleDescription(index)} className="see-more">
                  {expandedCards[index] ? '... See less' : '... See more'}
                </span>
              )}
            </p>
            <div className="social-links">
              <a href={member.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
