import React from 'react';
import styled from 'styled-components';

function View () {
  return (
    <Projects2>
      <section className=' new'>
      <div className='container-fluid img'>
        <div className=' sixth-wrapper2 '>
          <h1 className=' text' >View</h1>
        </div>
      </div>
      </section>
    </Projects2>
  );
}

export default View;

const Projects2 = styled.section`
  .sixth-wrapper2 {
    background-image: url('https://entre.qodeinteractive.com/wp-content/uploads/2018/01/about-us-background-img-1.jpg');
    background-size: cover;
    background-attachment:fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    margin: 0 0;
  }
  .new {
    padding-top: 120px;
  }
  
  .text {
    text-transform: uppercase;
    padding-left: 140px;
    padding-top: 110px;
	font-size: 60px;
	color: white;
	text-shadow: 6px 4px  black;
}
.new{
@media(max-width:992px) {
  padding-top: 50px;
}
}

`;
