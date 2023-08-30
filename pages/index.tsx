import React, {useEffect, useState} from 'react';
import styles from "../styles/index.module.css";
import Layout from "../components/layout"
import Image from "next/image";
import axios from 'axios'
import {Project} from "@/project";

export default function Index() {
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

                    <div id="About" className={styles.about}>
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
                    <ProjectsList/>
                </div>
            </div>
        </Layout>
    )
}

const URL = process.env.BACKENDURL || "https://pro-opossum-rapid.ngrok-free.app/"

function ProjectsList() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => setData(response.data)).catch(error => console.log(error))
    })
    return (
        <div className={styles.projects}>
            {data.map((project: Project) =>
                <div key={project.id} className={styles.project}>
                    <Image src={project.img} alt="projIco"></Image>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            )}
        </div>
    )
}

