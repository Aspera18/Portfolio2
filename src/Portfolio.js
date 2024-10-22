import React from 'react';  
import logo from './profilepic.jpg';

console.log(logo);

const Portfolio = () => {  
    return (  
        <div className="portfolio-container">  

            {/* Header Section */}  
            <header className="header">  
                <h1>Elvin Jayson Aspera</h1>  
                <p>IT Student</p>  
                <img src={logo} alt="Logo" />
                
            </header>  

            <br></br>
            <br></br>

            {/* About Section */} 
            <div className="aboutcard">
            <section className="about">  
                <h1>Get to know me!</h1>  
                <p> Hello there! I am Elvin Jayson Aspera, currently a student in Western Institute of Technology taking 
                    Bachelor of Science in Information Technology. I am a passionate student who has a love for technology and information.
                    I am experienced in HTML, CSS and Java, knows a little React and have some projects related to the said technologies I have said.
                    Even though the IT Field is very vast, I have set my mind to become an IT Security Specialist (which is under the Cybersecurity route).
                    <br></br>
                    <br></br>
                    With a background in IT, I have developed a unique approach that blends various technologies to create solutions that not only meet client needs but also delight users. Having worked on 
                    some projects, I take pride in my ability to tackle challenges and bring ideas to life through innovative thinking and meticulous attention to detail.
                    <br></br>
                    <br></br>
                    I’m always eager to learn and grow in my field, so feel free to reach out if you’d like to connect or collaborate!
                    </p>  
            </section>  
            </div>

            <br></br>

            {/* Achievements Section */}  
            <div className="achievementcard">
            <section className="achievement">  
                <h1>Achievements</h1>  
                <p> I am a consistent achiever throughtout my elementary, junior highschool, senior highschool and even in college.
                    <br></br>
                    I was always in the top 10 of my class in my elementary days. I am always an honor student in both junior and senor highschool. 
                    <br></br>
                    Now in college, I am an academic scholar here in school and also a scholar of the government. 
                    <br></br>
                    </p>  
            </section>  
            </div>

            <br></br>

            {/* Projects Section */}  
            <section className="projects">  
                <h2>My Projects</h2>  
                <div className="project-card1">  
                    <h3>El Paraiso De Fleur</h3>  
                    <p>An online reservation design for a restaurant.</p>  
                    <a href="https://aspera18.github.io/ElParaiso/index.html">View Project</a>  
                </div>  
                <div className="project-card2">  
                    <h3>Awesome Todos App</h3>  
                    <p>A todos app with working database. </p>  
                    <a href="https://awesome-todos-app-bohy.onrender.com/">View Project</a>  
                </div>  
                <div className="project-card3">  
                    <h3>WIT Grades Viewer Design</h3>  
                    <p>A Figma design of an app that lets you see your grades. </p>  
                    <a href="https://www.figma.com/design/Fql6Zfxu6z2Hc3LcDmJTq7/Prefi-Figma?node-id=0-1&t=uzU7wPLqy5yh75u8-1">View Project</a>  
                </div>  
            </section>  


            <br></br>
            {/* Skills Section */}  
            <div className="skillscontainer">
            <section className="skills">  
                <h2>Skills</h2>  
                <ul>  
                <div className="skillscard1">
                    <p>JavaScript</p>  
                </div>
                <div className="skillscard2">
                    <p>React.js</p>  
                    </div>
                <div className="skillscard3">
                    <p>CSS</p>  
                    </div>
                <div className="skillscard4">
                    <p>HTML</p>   
                    </div>
                </ul>  
            </section>  
            </div>
            
            {/* Contact Section */}  
            <footer className="footer">  
                <h2>Contact Me</h2>  
                <p>Email: aspera.elvinjaysoncit2011@gmail.com</p>  
                <p>Facebook: <a href='https://www.facebook.com/profile.php?id=100009129395650&mibextid=ZbWKwL'>Elvin Jayson Aspera</a></p>
                <p>Contact Number: 09946120155</p>
                 
            </footer>  
        </div>  
    );  
};  

export default Portfolio;
