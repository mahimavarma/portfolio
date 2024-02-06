import React from 'react'
import ProjectCard from './ProjectCard'
const projectData = [
    {
        id:1,
        title:"Chat-Website",
        description:"This is a website that allows you to chst with the different members that are logged in to this website with their respective email addresses.",
        image: "/images/Projects/Chat.png",
        tag: ["All","Web"],
        gitURL: "https://github.com/mahimavarma/chat-website",
        previewURL:"/"
    },
    {
        id:2,
        title:"Image-Search-Website",
        description:"A website that allows you to input anything in the search bar and it will accordingly provide you with the images of the object mentioned by you",
        image: "/images/Projects/image.png",
        tag: ["All","Web"],
        gitURL: "https://github.com/mahimavarma/Image-Search-Website",
        previewURL:"https://image-search-website.netlify.app/"
    },
    {
        id:3,
        title:"Weather-Provider",
        description:"A website that allows you to input any city and it provides you with the current temparture, the wind spped and the level of humidity at that region at the current time",
        image: "/images/Projects/Weather.png",
        tag: ["All","Web"],
        gitURL: "https://github.com/mahimavarma/Weather-Application",
        previewURL:"https://weatherfinderapplication.netlify.app/"
    },
    {
        id:4,
        title:"Tax-Minimization-Website",
        description:"A website calculates the gst tax and provides some resources through which we can reduce our tax payment methods(this mainly contains the front-end part of the website)",
        image: "/images/Projects/Tax.png",
        tag: ["All","Web"],
        gitURL: "https://github.com/mahimavarma/Final--NFC-Syntax-Squad-",
        previewURL:"https://mahimavarma.github.io/Final--NFC-Syntax-Squad-/"
    },
    {
        id:5,
        title:"University-Information-Website",
        description:"A Website that gives you extensive knowledge about a particular University and talks about its various features and courses(this mainly contains the front-end part of the website)",
        image: "/images/Projects/University.png",
        tag: ["All","Web"],
        gitURL: "https://github.com/mahimavarma/University---Website",
        previewURL:"https://harvardinformation.netlify.app/"
    },
    {
        id:6,
        title:"Hackathon-Registration-Website",
        description:"A Website allowing you to register for a hackathon and answering some on the FAQ's and giving information about the hackathon.(this mainly contains the front-end part of the website)",
        image: "/images/Projects/hackathon.png",
        tag: ["All","Web"],
        gitURL: "https://github.com/mahimavarma/Hackathon-Website",
        previewURL:"https://hackedupnew.netlify.app/"
    }
]
const ProjectSection = () => {
  return (
   <>
   <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>MY Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 text-white py-6'>
        <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>All Projects</button>
    </div>
   <div>{projectData.map((project) =><ProjectCard key={project.id} title={project.title} description={project.description} image = {project.image} gitUrl={project.gitURL} previewURL={project.previewURL}/>)}
   </div>
   </>
  )
}

export default ProjectSection
