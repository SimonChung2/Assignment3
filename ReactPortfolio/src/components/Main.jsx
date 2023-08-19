import profilePic from '../images/ProfileCircle.png'

export default function Main() {
    return (
            <main>
            <section id="home">
                <div className="intro">
                    <h1>Simon Chung</h1>
                    <p className="intro-text">Hello, I'm a passionate junior web developer with a strong coding affinity! Transitioning from a background in civil engineering, I now build captivating websites using a diverse range of web technologies, dedicated to delivering exceptional digital experiences. I am currently based in Toronto.</p>
                </div>
                <div className="profile">
                <img className="profile-pic" src={profilePic} alt="Profile picture of Simon Chung" />
                    <div className="profile-links">
                        <a href="https://www.linkedin.com/in/simonmchung/" target="blank"><i class="fa-brands fa-linkedin profile-link"></i></a>
                        <a href="https://github.com/SimonChung2" target="blank"><i class="fa-brands fa-github profile-link"></i> </a>   
                    </div>
                </div>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <div className="icon-container">
                    <i className="fa-brands fa-html5 skill-icon"></i>
                    <i className="fa-brands fa-css3-alt skill-icon"></i>
                    <i className="fa-brands fa-js skill-icon"></i>
                    <i className="fa-brands fa-php skill-icon"></i>
                    <i className="fa-brands fa-node skill-icon"></i>
                    <i className="fa-brands fa-react skill-icon"></i>
                </div>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <div id="project1">
                    <a href="https://www.simonmchung.com/Politer" target="blank"><img src="https://simonmchung.com/projectdata/politer.png" alt="thumbnail for politer website" /></a>
                    <div className="proj-information">
                        <p className="proj-description">Politer is an app that uses OpenAI's API to generate a more polite way of saying things</p>
                        <div className="languages">
                            <i className="fa-brands fa-html5 proj-icon"></i>
                            <i className="fa-brands fa-css3-alt proj-icon"></i>
                            <i className="fa-brands fa-js proj-icon"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <h2>About</h2>
                <p className="about-description">You can find additional details about me below. </p>
                <div className="about">
                    <div className="languages2">
                        <h3>Languages</h3>
                        <p>English</p>
                        <p>French</p>
                    </div>
                    <div className="education">
                        <h3>Education</h3>

                        <h4>Humber College</h4>
                        <p>Ontario Graduate Certificate - Web Development</p>
                        <p>January 2023-December 2023</p>

                        <h4>The University of the West Indies</h4>
                        <p>Postgraduate Diploma - Construction Management</p>
                        <p> September 2020 - June 2021</p>

                        <h4>The University of the West Indies</h4>
                        <p>Bachelor of Science - Civil Engineering</p>
                        <p>September 2011  - June 2015</p>
                    </div>
                </div>
            </section>
        </main>
    );
}