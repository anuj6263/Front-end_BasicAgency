import React from 'react'
import './content.css'

const Content = () => {
  return (
    <div>
    <div className='content'>
        <p className='description'>BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.
        </p>
        <img className='logo' src={require("./trademark.jpg")} width="500" height="300" alt="Error 404" />
    </div>
      <button className='information'>See the work</button>
    <div className='adventures'>
      <img src={require("./pantagonia.jpg")} alt=""/>
      <img src={require("./Wilson.jpg")} alt="" />

      <img src={require("./google.jpg")} alt="" />
    </div>
    <p className='img-description'>
        <h3>AN ECOMMERCE EXPERIENCE
        DRIVEN BY PANTAGONIA'S
        BRAND MISSON</h3>
        <h3 className='second-margin'>
        A CENTURY OLD SPORTS
        BRAND FINDING ITS PLACE
        IN CULTURE
        </h3>
        <h3>
        AN ECOMMERCE EXPERIENCE
        HELPING GOOGLE BRING ITS
        HARDWARE TO PEOPLE ACROSS
        THE GLOBE
        </h3>
      </p>
      <div>
        <h1>FEATURED ENGAGEMENTS</h1>
      </div>
      <div className='startups'>
        <h3>
          Google
          <br />
          ─
        </h3>
        <h3>KFC
          <br />
          ─
        </h3>
        <h3>Wilson
          <br />
          ─
        </h3>
        <h3>AT & T
          <br />
          ─
        </h3>
        <h3 >Pantagonia
          <br />
           ─
        </h3>
      </div>
      <div className='startups-des'>
        <p>
          Our embeded partnership with google is as deep as it gets
        </p>
        <p>
          An award winning global, digital transformation mobile App.
        </p>
        <p>
        Wilson, the iconic American sporting goods brand, came to us at an inflection point.
        </p>
        <p>
        Redesiging the digital flagship for the largest telecommunication in the world
        </p>
        <p className='pantagonia-des'>
        Ongoing partnership providing strategy, branding, experience design and development.
        </p>
      </div>
      <div className='below-final'>
        <h1>
        BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE
        <br />
        <br />
        <br />
        <br />
        ADWEEK AGENCY SPOTLIGHT
        </h1>
        <img src={require("./giphy.gif")} alt="Not loading" />
      </div>
      <button className='about'>About us</button>
      <div className='news'>
          <h2>FEATURED NEWS</h2>
          <button className='view'>View All</button>
      </div>
      <hr />
      <div className='news-items'>
        <img src={require('./hammer.jpg')} alt="Hammer" />
        <h3> BREAKING THROUGH THE BLANDING BLAHS </h3>
      </div>
      <figcaption> PRESS 6.16.23</figcaption>
      <hr />
      <br />
      <div className='news-items'>
        <img src={require('./andrew.jpg')} alt="Hammer" />
        <h3> ANDREW NG MODERATES TALK ON THE ART AND SCIENCE OF BRAND PURPOSE AND CREATIVITY </h3>
      </div>
      <figcaption> PRESS 6.5.23</figcaption>
      <hr />
      <br />
      <div className='news-items'>
        <img src={require('./meditation.jpg')} alt="Hammer" />
        <h3> JOHN WATERS BARE WALLS AND SPARKLING CREATIVITY </h3>
      </div>
      <figcaption> PRESS 5.15.23</figcaption>
      <hr />
      <br />
      <br />
    </div>
  )
}

export default Content