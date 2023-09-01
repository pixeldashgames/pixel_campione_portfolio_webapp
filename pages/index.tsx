// noinspection HtmlUnknownAnchorTarget

import React, {ChangeEvent, MouseEventHandler, useEffect, useState} from 'react';
import styles from "../styles/index.module.css";
import Layout from "../components/layout"
import Image from "next/image";
import axios from 'axios'
import {Project} from "@/project";

export default function Index() {
    const [nameInput,SetNameInput] = useState('');
    const [emailInput,SetEmailInput] = useState('');
    const [messageInput,SetMessageInput] = useState('');

    const handleNameInputChange=(event:ChangeEvent<HTMLInputElement>)=>{
        SetNameInput(event.target.value);
    }
    const handleEmailInputChange=(event:ChangeEvent<HTMLInputElement>)=>{
        SetEmailInput(event.target.value);
    }
    const handleMessageInputChange=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        SetMessageInput(event.target.value);
    }
    const handleSubmitButton=()=>{
        const URL = "https://pixel-campione-portfolio-back-de4b8d98e131.herokuapp.com/";
        const postData = async ()=>{
            try{
                const response = await axios.post(URL+'contact/',{
                    name: nameInput,
                    emailBody: messageInput,
                    contactEmail: emailInput
                })
            }
            catch (e) {
                console.error(e);
            }
        }
    }
    return (
        <Layout>
            <div className={styles.navbar}>
                <Image
                    src="/logo_transparent.png"
                    alt="Logo of the team"
                    width={50}
                    height={50}
                ></Image>
                <div className={styles.navbarLinks}>
                    <a href="#Home">/Home</a>
                    <a href="#About">/About</a>
                    <a href="#Projects">/Projects</a>
                    <a href="#Contact">/Contact</a>
                </div>
            </div>
            <div className={styles.background}>
                <div className={styles.sections}>
                    <div id="Home" className={styles.home}>
                        <p className={styles.mainTitle}>
                            Pixel-Campione
                            <br/>
                            Development
                        </p>
                        <p className={styles.mainSubTitle}>
                            Full-Stack Web Development
                        </p>
                    </div>

                    <div id="About" className={styles.sectionTitle}>
                        <p className={styles.subtitle}>About Us</p>
                        <p className={`${styles.text} ${styles.aboutText}`}>
                            Welcome to Pixel-Campione Development,
                            the software development company that
                            can handle all your web development needs.
                            Whether you need a simple landing page,
                            a complex e-commerce site, or anything in
                            between, we have the skills and experience to deliver.
                            We use the latest technologies and best practices to
                            create stunning, responsive, and user-friendly websites
                            that will impress your customers and boost your business.
                            <br/>
                            Pixel-Campione Development is more than just a company,
                            it's a team of passionate developers who love what they
                            do and strive for excellence. Contact us today and let us
                            turn your vision into reality.
                        </p>
                    </div>
                    <div id="Projects" className={styles.sectionTitle}>
                        <p className={styles.subtitle}>Projects</p>
                        <ProjectsList/>
                        {/*<CustomList />*/}
                    </div>
                    <div id="Contact" className={styles.sectionTitle}>
                        <p className={styles.subtitle}>Contact Us</p>
                        <div className={styles.contactData}>
                            <p className={`${styles.text}`}>
                            Hi Pixel-Campione Development, my name is <input type="text" placeholder="Enter your name" onChange={handleNameInputChange}/>,<br/>
                            my contact email is <input type="email" placeholder="Enter your email" onChange={handleEmailInputChange}/>, and I would like to
                            </p>
                            <textarea placeholder="Enter your message" onChange={handleMessageInputChange}></textarea>
                        </div>
                            <CreateSubmitButton name={nameInput} email={emailInput} message={messageInput} handler={handleSubmitButton}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
type Form ={
    name:string;
    email:string;
    message:string;
    handler:MouseEventHandler
}
function CreateSubmitButton({name,email,message,handler}:Form) {
        if(name!=''&&email!=''&&message!=''){
            return <button onClick={handler} className={styles.contactButton1}>Submit</button>
        }
     return <button className={styles.contactButton2}>Submit</button>
}

type TechDtoProp={
    techArr:TechDto[]
}
function CreateTechStack({techArr}:TechDtoProp) {

    return(
        /*TODO:Change the css config for styles.tech*/
        <div className={styles.tech}>
            {techArr.map((tech:TechDto)=>
                <div key={tech.id}>
                    <a href={tech.referenceURL} target="_blank">
                        <Image src={tech.image} alt={tech.name}></Image>
                    </a>
                </div>
            )}
        </div>
    )
}
type ProjectProp={
    project:Project;
}
function CreateProject({project}:ProjectProp){
    const [opened,SetOpened] = useState(false);
    const handleSetOpened=()=>{
        SetOpened(!opened);
    }
    return (
        /*TODO: Make the css for the p tag*/
            <div className={styles.individualProject} onClick={handleSetOpened}>
                <div className={styles.mainProjectData}>
                    <Image src={project.img} alt="projIco" width="100" height="100" className={styles.projectImg}></Image>
                    <div className={styles.projectMainData}>
                        <p>{project.name}</p>
                        <p>{project.description}</p>
                    </div>
                </div>
                {opened&&
                    <div className={styles.auxProjectData}>
                        <p>{project.detailedDescription}</p>
                        <CreateTechStack techArr={project.techStack}/>
                    </div>
                }
            </div>
        )
}

function ProjectsList() {
    const [data, setData] = useState([]);
    const URL = "https://pixel-campione-portfolio-back-de4b8d98e131.herokuapp.com/";
    console.log(URL);
    useEffect(() => {
        axios.get(URL+"projects/")
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    },[])
    return (
        <div className={styles.projectList}>
            {data.map((project: Project) =>
                <div key={project.id}>
                    <CreateProject project={project}/>
                </div>
            )}
        </div>
    )
}

