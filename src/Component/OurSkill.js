import React from 'react'
import skill from '../Assets/Images/skill.jpg';
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'




function OurSkill() {
    return (
        <OurSkill2>
            <section className='section-padding padding-between' id='about'>
        <div className='container'>
          <div className='row '>
            <div className='col-lg-7 col-sm-12 col-md-12 mx-auto flex-centering mb-5 mb-lg-0'>
              <div className='img-styled4 forsize'>
                <div className='border-styled primary-border'>
                  <TransformWrapper defaultScale={1} defaultPositionX={50} defaultPositionY={50}>

                    <TransformComponent>
                  <img
                    width='800'
                    height='401'
                    src={skill}
                    alt='about-img'
                    className='img-fluid abut-picture'
                  />
                  </TransformComponent>
                  </TransformWrapper>
                </div>
              </div>
              
              {/* <!-- end img-styled --> */}
            </div>
            {/* <!-- end column --> */}
            <div className='col-lg-5 col-sm-12 col-md-12 flex-centering '>
              <h1 className=' about'>
                <h1 className='heading-border  primary-color'>Our Skill</h1>
              </h1>

              {/* <!-- end heading --> */}

              <p className='text-black-5 about-margin'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
               
              </p>

              {/* <!-- end about-btns --> */}

              {/* <!-- end about-text --> */}
            </div>
            {/* <!-- end column --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section> 
        </OurSkill2>
    )
}

export default OurSkill





const OurSkill2 = styled.section`
.abut-picture {
  padding-top: 30px;
}
.about {
  padding-top: 240px;

 
}
.sec-pading {
  padding-top: 60px;
}
.img-styled4 img {
  height: 450px;
  width: 1000px;
margin-right: -160px;

}
.img-style3 {
  height: 450px;
  width: 1000px;
margin-right: -160px;
  margin-left: -145px;
}
.forsize img {
  padding-top: 120px;
  height: 800px !important;
}
.padding-between {
  padding-bottom: 100px;
}
.about-margin {
  /* padding-top: 100px; */
   font-family: Bellefair,serif;
    font-weight: 400;
    line-height: 1.6em;
    font-size: 25px;
    margin: 25px 0;
    color: #414347;
}
.about{
@media(max-width:992px) {
  padding-top: 0;
}
}
`;