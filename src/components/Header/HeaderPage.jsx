import React from 'react'
import './HeaderPage.css'

function HeaderPage() {
  return (
    <>
      <header>
      <div><img src="./images/3a.jpg" alt="img" width='100%' /></div>
      <center><div className="container">
        <div className='box'>
            <h1>TURNING REAL HAPPINESS INTO TIMELESS IMAGERY</h1>
            <h2>Documenting life stories across Northern California</h2>
            <h3>Specializing in intimate wedding days, elopements and lifestyle photography</h3>
        </div>
      </div></center>
      </header>
      
      <section>
        
          <div className='about'>
          <center> <p>Your wedding day experience, from planning it to living it, 
              can be whatever you want it to be. I’m already one of your biggest 
              advocates in creating the wedding day experience you’ve always daydreamed of. 
              Whether it’s just the two of you for an intimate adventure in the beautiful 
              landscapes of California or in the busy streets of San Francisco surrounded 
              by all your loved ones—it’s your day. Your experience is my top priority, 
              and you’ll see that before, during, and after your wedding day.</p></center>
          </div>

          <div className='carles'>
              <div className='image'><img src="./images/5.jpg" className='carles-img' alt="img"  /></div>
              <div className='content'>
                <h1>HI, I'M CARLES</h1>
                <p>Welp! You’re here. You’re getting married 
                  (or maybe you already are so, PS I photograph families too)! If there is one goal I
                   have for your wedding experience, it’s that you have a fun and easy experience all 
                   the way through planning and into the wedding day (and after, too!). 
                   Let’s make it easy—I’ll be here every step of the way, through anything you 
                   may need. I got you!</p>
                <button>Learn More</button>
              </div>
          </div>

        </section>

        <section>

          <div className='credit'>
              <img src="./images/6.jpg" alt="img" width='100%' />
              <center><p>“When working with Kirsten, anxieties immediately melt away. 
                Kirsten is truly gifted in making people feel comfortable and beautiful 
                in their skin. Her flexibility, vision, and calming personality are just 
                a few qualities that make working with her so enjoyable and genuine.”</p></center>
                <center><h2>Marnie and Jeff</h2></center>
          </div>

          <div className='heading'>
            <center><h1>Words From The People</h1>
            <p>Because real humans said these nice things about me</p></center>
          </div>

          <center><div className='card'>
            <div className='card1'>
              <img src="./images/7.JPG" alt="img" />
              <h3>STEVE + EMY</h3>
              <p>One of the best decisions we made throughout the whole process of wedding planning was choosing Carles 
                 to be our photographer. In a world where the wedding industry can sometimes feel disingenuous 
                 and impersonal,Carles made the process feel like we were meeting a close friend and having 
                 laughs and a good times</p>
            </div>
            <div className='card2'>
              <img src="./images/8.JPG" alt="img" />
              <h3>RICARD + DIANA</h3>
              <p>When I was planning my wedding, I wasn't picky about much as far as where/when/how BUT I 
                did know I was going to be picky about the PHOTOS. They would live on through the history of my 
                future family, be something I would share with my kids; as an artist myself, it mattered to
                me that the love and beauty I share with my family</p>
            </div>
            <div className='card3'>
              <img src="./images/9.JPG" alt="img" />
              <h3>TOSIN + TESSA</h3>
              <p>Carles has a way of capturing the little things. They way you look at a significant other. 
                The feelings you felt the moment the photo was taken. That certain slant of light that catches your 
                eye. he captures THE moment. he has a way of identifying and conveying your personality 
                through the lens. he helps you relax…</p>
            </div>
          </div>
          
          <div className='booking'>
            <p>Ready to book your dream wedding?</p>
          </div>
          </center>
        </section>

        <section>

          <footer>
            <div className='footer'>
              <hr />
              <div className='copyrights'>
                <h3>Carles Noelle</h3>
                <p>Copyright © 2023 Carles Noelle. All rights reserved</p>
                <h5>Privacy policy</h5>
              </div>
              <div className='icons'>

              </div>
            </div>
          </footer>
        
        </section>
      
    </>
  )
}

export default HeaderPage
