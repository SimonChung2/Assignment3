import {useState, useEffect} from "react";

export default function Projects(){
    const [projectName, setProjectName] = useState("");
    const [screenshot, setScreenshot] = useState("");
    const [url, setUrl] = useState("");
    const [blurb, setBlurb] = useState("");
    const [languages, setLanguages] = useState("");

    useEffect(()=> {

        const getProject = async () => {
            let response = await fetch (
                'https://simonmchung.com/projectdata/project.json',
                {
                    method: 'get'
                }
            );
            let data = await response.json();
            console.log(data);
            setProjectName(data.project_name);
            setScreenshot(data.screenshot);
            setUrl(data.url);
            setBlurb(data.blurb);
            setLanguages(data.languages);
        }
        getProject();
    }, []);




    return (
        <section id="projects">
        <h2>Projects</h2>
        <div id="project1">
            <h3 className="project_name">{projectName}</h3>
            <a href={url} target="blank"><img src={screenshot} alt="thumbnail for politer website" /></a>
            <div class="proj-information">
                <p class="proj-description"> {blurb} </p>
                <div class="languages">
                    <span>Languages: {languages[0]+" "+languages[1]+" "+languages[2]}</span>
                </div>
            </div>
        </div>
    </section>
    )
}