import React from 'react'
import './panel.css'

export default function Panel() {
    return (
        <div className="about">
        <h2 className="about-head">Welcome to BlogMe!</h2>  
        <h3 className="about-subhead">Find world class book articles and reviews here!</h3>
        <img className="about-img" src="Images/books.jpg"></img>
        <h4 className="about-subhead">You can like, comment and explore!</h4>
        <h2 className="about-head">Contact</h2>
        <h3 className="about-subhead"><a target="_blank" href="https://github.com/FireQueen-3010">Github</a>  <a target="_blank" href="https://www.linkedin.com/in/diksha-patro-b-a8907b162/">LinkedIn</a>  <a target="_blank" href="mailto: dikshapatro806@gmail.com">Email</a></h3> 
        </div>
    )
}
