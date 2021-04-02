import React from 'react';
import ReactDom from 'react-dom';
import Carousel from 'react-elastic-carousel';
import skill from '../Assets/Images/skill.jpg'
import styled from 'styled-components';


const breakPoints = [
  { width: 1, divsToShow: 1 },
  { width: 1, divsToShow: 1 },
  { width: 1, divsToShow: 1 },
  { width: 1, divsToShow: 1 },
];

function Testimonies() {
  return (
    <>
	   
		<Testimonies2>
	  <div className='container text1'>
        <h1 style={{ textAline: 'center' }}>Testimonies from customers</h1>
		</div>
		<div className='container-fluid '>
        <Carousel breakPoints={breakPoints}>
	
		<div className='left-side-wrapper col-sm-12 col-md-12 col-lg-12 mobile'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum  1
          </div>
		</div>
		<div className='left-side-wrapper col-sm-12 col-md-12 col-lg-12 mobile'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum  1
          </div>
		</div>
		<div className='left-side-wrapper col-sm-12 col-md-12 col-lg-12 mobile'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum  1
          </div>
		</div>
		<div className='left-side-wrapper col-sm-12 col-md-12 col-lg-12 mobile'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum  1
          </div>
		</div>
		<div className='left-side-wrapper col-sm-12 col-md-12 col-lg-12 mobile'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum  1
          </div>
		</div>
		<div className='left-side-wrapper col-sm-12 col-md-12 col-lg-12 mobile'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum  1
          </div>
		</div>
		<div className='left-side-wrapper col-sm-12 col-md-12 col-lg-12 mobile'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum  1
          </div>
		</div>
		
        </Carousel>
		</div>
		</Testimonies2>
		<Padding></Padding>

		
    </>
  );
}

export default Testimonies;





const Testimonies2 = styled.section`
    padding-top: 30px;
    padding-left: 30px;
   text-align:center;
    height: 450px;
    width:100%;
    color: dark;
    font-size: 25px;
	font-weight:600;
    background-image: url("https://entre.qodeinteractive.com/wp-content/uploads/2018/02/h1-parallax-2.jpg");
    padding-top: 80px;
    background-repeat: no-repeat;
	


	.mobile{
@media(max-width:992px) {
  font-size:18px;
}
}
	

`;
const Padding = styled.section`
padding-bottom: 50px;
`;



