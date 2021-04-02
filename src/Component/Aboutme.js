import React from 'react';
import styled from 'styled-components';

import about from '../Assets/Images/about-us-img-1.jpg';
import about1 from '../Assets/Images/about-us-img-2.jpg';
// import { container  } from "react-bootstrap"


function Aboutme() {
  return (
    <FirstSection>
      <div class='section-padding  ' id='about'>
        <div className='container '>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12'>
                   
              <p className='text-black-5 about-margin sec-padding1 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                quisquam eius sed odit fugiat iusto fuga praesentium optio,          
              </p>
              {/* <!-- end about-btns --> */}
              {/* <!-- end about-text --> */}
            </div>
            {/* <!-- end column --> */}
          </div>
        </div>
      </div>
      <section className='section-padding ' id='about'>
        <div className='container'>
          <div className='row '>
            <div className='col-lg-7 col-sm-12 col-md-12 mx-auto flex-centering mb-5 mb-lg-0'>
              <div className='img-styled'>
                <div className='border-styled primary-border'>
                  <img
                    width='100'
                    height='201'
                    src={about}
                    alt='about-img'
                    className='img-fluid abut-picture'
                  />
                </div>
              </div>
              <div className='img-styled2'>
                <div className='border-styled primary-border'>
                  <img
                    width='100'
                    height='201'
                    src={about1}
                    alt='about-img'
                    className='img-fluid abut-picture'
                  />
                </div>
                {/* <!-- end border-styled --> */}
              </div>
              {/* <!-- end img-styled --> */}
            </div>
            {/* <!-- end column --> */}
            <div className='col-lg-5 col-sm-12 col-md-12 flex-centering '>
              <h1 className=' about'>
                <h1 className='heading-border  primary-color'>About Me</h1>
              </h1>
              {/* <!-- end heading --> */}
              <p className='text-black-5 about-margin1  sec-padding2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                
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
    </FirstSection>
  );
}

export default Aboutme;




const FirstSection = styled.section`
.abut-picture {
  padding-top: 30px;
}
.about {
  padding-top: 240px;
}
.sec-padding1 {
  padding-top: 80px;
  font-family: Bellefair,serif;
    font-weight: 400;
    line-height: 1.6em;
    font-size: 25px;
    margin: 25px 0;
    color: #414347;
}
.sec-padding2 {
  font-weight: 400;
    line-height: 1.6em;
    font-size: 25px;
    margin: 25px 0;
    color: #414347;
}

.img-styled img {

  /* padding-top: 100px; */
  height: 450px;
  width: 1000px;
  & :hover {
  transform: scale(1.1);
transition-duration: 0.5s;
}

}
.img-styled2 img {
  height: 250px;
  width: 1000px;
margin-right: -160px;
}
.img-styled2 :hover {
  transform: scale(1.04);
transition-duration: 0.5s;
 
}
.img-styled img:hover {
  transform: scale(1.04);
  transition-duration: 0.5s;
  
}
.about{
@media(max-width:992px) {
  padding-top: 0;
}
}
.sec-padding1{
@media(max-width:992px) {
  padding-top: 25px;
}
}

`;
