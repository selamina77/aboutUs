import React from 'react';
import styled from 'styled-components';
import Aboutme from '../Component/Aboutme';
import Projects from '../Component/View';
import OurSkill from '../Component/OurSkill';
import banner from '../Assets/Images/banner.jpg'
import Testimonies from '../Component/Testimonies';


function AboutUs() {
  return (
    <Header>
      <section className='sixth-heghlight-wrapper'>
        <div className='container-fluid'>
          <div className='left-side-wrapper col-sm-12 col-md-12 col-lg-12'>
            <h1 className='middle-text us'>About Us</h1>
            <h4 className='description'>meet us and start work with us</h4>   
          </div>
        </div>     
      </section>
      <Aboutme />
      <Projects  />
      <OurSkill />
      <Testimonies />
    </Header>
  );
}

export default AboutUs;





const Header = styled.section`
  .sixth-heghlight-wrapper {
      background-image: url(${banner});    
    background-color: red;
    padding-top: 05px;
    margin: 0 0 10px 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 750px;
  }
  .middle-text {
    padding-top: 200px;
    font-size: 60px;
    color: white;
    text-shadow: 4px 4px red;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .description {
    text-align: center;
    color: white;
    letter-spacing: 0.2em;
  }
  .us {
    text-align: center;
    
  }
`;
