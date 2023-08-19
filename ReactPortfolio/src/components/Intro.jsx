import profilePic from '../images/ProfileCircle.png'

export default function Intro() {
    return (
        <section id="home">
        <div class="intro">
            <h1>Simon Chung</h1>
            <p class="intro-text">Hello, I'm a passionate junior web developer with a strong coding affinity! Transitioning from a background in civil engineering, I now build captivating websites using a diverse range of web technologies, dedicated to delivering exceptional digital experiences. I am currently based in Toronto.</p>
        </div>
        <div class="profile">
            <img class="profile-pic" src={profilePic} alt="Profile picture of Simon Chung" />
            <div class="profile-links">
                <a href="https://www.linkedin.com/in/simonmchung/" target="blank"><i class="fa-brands fa-linkedin profile-link"></i></a>
                <a href="https://github.com/SimonChung2" target="blank"><i class="fa-brands fa-github profile-link"></i> </a>   
            </div>
        </div>
    </section>
    );
}
