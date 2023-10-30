import React from 'react'
import './About.scss'
import men from '../../img/photo_5330075421477293501_y-removebg-preview.png'

function About() {
  return (
    <div className='About' id='about'>
      <div className="container">
        <div className="about_page">
        <span>
          <img src={men} alt="" />
        </span>
                <div>
                  <h6>Who Am I ?</h6>
                  <h3>About Me</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a isteculpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia          temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!</p>
                  <button>Download CV</button>
                </div>
        </div>
      </div>
    </div>
  )
}

export default About
