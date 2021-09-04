import React, { useEffect, useState } from 'react';
//
import { Navbar, ProjectSection, Footer } from '../components/exports';
import img1 from '../assets/loadingProjects.jpg';
import firebase from './projectsBackend'
import 'firebase/database'
// eslint-disable-next-line
const title = '${Projects}';
const defaultProject =
{
    title: "Loading . . .",
    description: " . . . ",
    githubLink: "",
    hasGithub: false,
    hasImage: true,
    imageLink: img1,
    hasSite: false,
    siteLink: "",
};
// eslint-disable-next-line
const createProject = (title, description, githubLink, hasImage, imageLink, hasSite, siteLink) => {

    const databaseRef = firebase.database().ref('projects');
    let project =
    {
        title: title,
        description: description,
        githubLink: githubLink,
        hasImage: hasImage,
        imageLink: imageLink ,
        hasSite: hasSite,
        siteLink: siteLink,
    }
    databaseRef.push(project);
};

const Projects = () => {

    const [projectList, setProjectList] = useState();

    function getProjects()
    {
        const databaseRef = firebase.database().ref('projects');
        databaseRef.on('value', (snapshot) => {
            const projects = snapshot.val();
            const projectList = [];
            for (let id in projects) {
                projectList.push(projects[id]);
            }
        setProjectList(projectList);
    });
}

    useEffect(() => {
        getProjects();    
    }, []);

    return (
        <>
            <Navbar pageTitle={title} animationYfrom={-250} infoDelay={0} infoDuration={1} />
            <>
                {projectList ? projectList.map((project, index) => (<ProjectSection {...project} key={index} />)) : (<ProjectSection {...defaultProject} />)}
            </>
            <Footer></Footer>


        </>
    )
}
export default Projects

//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//
