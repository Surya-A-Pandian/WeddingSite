import React from 'react'
import './Contact.css'

function contact() {
  return (
   <>
      <section>
        <img src="./images/1.jpg" alt="img" width='100%'/>
        <div className='banner'>
          <div className='box1'>
            <h1>HOW TO BOOK</h1>
            <h5>1.Fill Out Contact Form</h5>
            <p>2.Set up a time to chat</p>
            <p>3.Become Best Friends</p>
            <p>4.Book your dream photographer</p>
          </div>  
          <div className='box2'>
            <h4>What would you like to talk about ?</h4>
            <div className='box3'>
              <div className='box4'>
                <center><h3>WEDDING</h3></center>
                <center><p>Engagements,</p>
                <p>Elopements and Events,</p>
                <p>Big or Small</p></center>
              </div>
              <div className='box5'>
                <center><h3>LIFESTYLE</h3>
                <p>Family, Couples, and</p>
                <p>Maternity Sessions</p></center>
              </div>
              <div className='box6'>
                <center><h3>OTHERS</h3>
                <p>General questions</p></center>
              </div>
            </div>
          </div>
        </div>    
      </section>
   </>
  )
}

export default contact
