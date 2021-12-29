import React from 'react'
import Footer from './Footer'
import './Home.css'
import Navbar from './Navbar'
import {  Link } from "react-router-dom";

function Home() {
    return (<div>
                <div className='h_con'>
                    <div ><h1 className='Heroo'>I am <span id='hero'>Sunil Cj</span><br /> FullStack & Cloud Engineer</h1><br />
                    <p>You will explore about me, Tech blogs, DSA problem solution, Cool editing stuffs and upcoming projects of mine in here</p>
                    <p><span id='hero_0'> This site is still under production and will be ready to deploy at New year 2022</span></p>
                    <br /><div id='btn'><Link to="/Contact"><button className='talk' >Let's Talk</button></Link> <a href="/Resume.pdf" download="Resume.pdf"><button className='cv' >Download my CV</button></a></div></div>
                    
                </div><br /><br /><br />
                <div className='h_con1'>
                   <div className='about'>
                   
                       <div className='about_con'>
                       <h3 className='about_text'>About me</h3>
                       <p>I am a Freelancer, self-thought developer and cloud engineer. I’m an engineering graduate looking for a software or cloud engineer position to start my career and also  looking to collabrate with intresting start-up projects . </p><br />
                        <a href='/About' ><button className='talk'>To Know more </button></a>
                        </div>
                        
                   </div>
                </div>
 
            </div>
    )
}

export default Home
