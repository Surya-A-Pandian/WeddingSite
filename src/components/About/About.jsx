import React from 'react'
import './About.css'

function About() {
  return (
   <>
    <header>
      <div><img src="./images/10.jpg" alt="img" width='100%'/></div>
      <div className='head'>
        <center><p> A bit about me, my life and my family</p></center>
      </div>
    </header>

    <section>

      <div className='text'>
         <img src="./images/12.jpg" className='noelle' alt="img" /> 
         <div className='about1'>
          <p>I'm currently living in California with my wife and three kids. 
            Anyone that knows me knows my family.I,m living in Northern California.
            Northern California constantly amazes me with its many different landscapes. 
            I grew up in the deserts of Las Vegas, so I find myself
            in constant awe of the wide variety of landscapes we have in the Bay Area. I try to spend as much 
            time as I can outside, rain or shine and sometimes fog, wandering out in the busy streets, 
            the quiet woods,or the diverse coast lines walking the dogs. I enjoy this beautiful place I call home.
            </p>
          </div>      
      </div>
      <div className='text1'>
          <p>If I’m not out exploring, you can often find me doing yoga in a tiny corner of my home, 
            and practice in an amazing local studio when I can. At home while doing yoga I get to have my 
            kids join me and they make me love practicing even more. Another little-known hobby of mine is 
            pottery! I often dream of having my own wheel and kiln one day so I can just lose track of time 
            creating fun things for the people I love. As you can probably tell from my interests, I’m 
            definitely an introvert. But I do enjoy spending time with my people and I really love 
            my job as a photographer.
          </p>
       </div>   
       
       <img src="./images/13.jpg" alt="img" width='100%'/>
       <div className='text2'>
          <p>My process: Life can sometimes inherit a hustle mentality where working equals success; 
            but I’ve found joy in the slow moments. Really taking a moment to slow down balances me, 
            which helps me serve my clients better, build my relationships stronger, and makes my 
            community better. It’s why I like to focus on the little moments during sessions and 
            the candid images between the posed. Slowing life down, even for a couple of hours to shoot, 
            changes the very feeling of the images and it’s refreshing for me and my clients. 
            I’m so lucky to have a job that combines so many things that I’m passionate about. 
            I’m grateful I have the skills to be able to provide more of an experience than 
            just beautiful photographs.</p>
       </div>
       <div className='text3'>
          <p>“How did you get into photography?”: A few years back, my late grandfather pulled me aside, 
            said “I think you may have an eye for photography,” and gifted me my first camera as a 
            graduation present. Little did I know that would be the first step in my career as a photographer. 
            It truly changed my life forever. He is what makes this passion even more special. He was one of 
            my favorite people on earth and the fact that he got me started on this path makes me cherish 
            my craft even more. I know he would be proud of the business I have built and the community 
            I have created, and I think of him and his legacy often as I am working.</p>
       </div>
       <div className='text4'>
          <p>After moving to the Bay area (and not knowing anyone or really anything about it), 
            I craved connection and community. Photography allowed me to build connections with people 
            by documenting them for several milestones throughout many years. I realized that while watching 
            other people’s lives grow and change with time, that I was deeply impacted and changed as well 
            in all the best ways. This realization is what’s drawn me closer to this love of documenting 
            people throughout their lives. I always hope to see my clients again, and some have even become 
            family to me. I’ve seen their milestones, I know their histories, I’ve been a part of big life 
            changes, and have witnessed families grow. This has provided me with a unique and beautiful 
            perspective that finds itself in every image I take. It’s an immense privilege and honor to 
            create and experience that makes memories tangible.</p>
       </div>

        <div className='chat'>
          <center><p>Ready to Chat ?</p></center>
          <center><button>Start a Chat</button></center>
        </div>

    </section>

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
   </>
  )
}

export default About
