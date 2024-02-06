"use client"
import React,{useTransition,useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
{
    title:"Skills",
    id:"skills",
    content:(
        <ul className='list-disc pl-2'>
            <li>UI UX Designer</li>
            <li>Figma</li>
            <li>Dora</li>
            <li>Spline</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Mongodb</li>
            <li>Java Script</li>
            <li>Python</li>
            <li>Java</li>
            <li>My SQL</li>
       </ul>
    )
},
{
    title:"Education",
    id:"education",
    content:(
        <ul className='list-disc pl-2'>
            <li>Thadomal Shahani College Of Engineering</li>
            <li>Pace Junior Science College</li>
            <li>Queen Mary School</li>
       </ul>
    )   
},
{
    title:"Certifications",
    id:"certifications",
    content:(
        <ul className='list-disc pl-2'>
            <li>UI UX developer</li>
            <li>Web developer</li>
       </ul>
    )   
}
]

    

const AboutSection = () => {
    const [tab,setTab] = useState("skills")
    const [isPending,startTransition] = useTransition()
    const handleTabChange = (id) =>{
        setTab(id)
    }
  return (
    <section className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
    <Image
    src="/images/about-image.png"
    width={500}
    height={500}
     />
     <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
        <p className='text-base md:text-lg'>Hello! I'm  Mahima Varma, a dedicated software engineer with a profound passion for coding. I find joy in translating intricate ideas into functional, elegant solutions that contribute to a seamless user experience. Specializing in [mention your main area of expertise, e.g., full-stack development], I am driven by a relentless curiosity to stay at the forefront of technological advancements. Outside of the code editor, you'll catch me exploring the latest tech trends, engaging in open-source projects, and continually expanding my skill set. Let's build a future where innovation knows no bounds – one line of code at a time!</p>
        <div className='flex flex-row mt-8'> 
            <TabButton selectTab={() =>handleTabChange("skills")}
             active={tab ==="skills"}
             >
            {" "}
            Skills{" "}
            </TabButton>
            <TabButton selectTab={() =>handleTabChange("education")}
             active={tab ==="education"}>
            {" "}
            Education{" "}
            </TabButton>
            <TabButton selectTab={() =>handleTabChange("certifications")}
             active={tab ==="certifications"}>
            {" "}
            Certifications{" "}
            </TabButton>
        </div>
        <div className='mt-8'>{TAB_DATA.find((t) =>t.id ===tab).content}</div>
     </div>
</div>
</section>
  )
}

export default AboutSection
