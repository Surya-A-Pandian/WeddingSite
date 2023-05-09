import React from 'react'
import './Blogs.css'

function Blogs() {
  return (
    <>
    <section>

        <div className='title'>
            <center><h1>WEDDING BLOGS</h1></center>
        </div>

        <div className='pic'>
            <div className='pic1'>
                <img src="./images/15.JPG" alt="img" width='100%' />
                <h3>Joe & Luis</h3>
            </div>
            <div className='pic2'>
                <img src="./images/16.JPG" alt="img" width='100%' />
                <h3>Bryan & Grace</h3>
            </div>
        </div>
        <div className='pic3'>
            <div className='pic4'>
                <img src="./images/17.JPG" alt="img" width='100%' />
                <h3>Jhon & Victoria</h3>
            </div>
            <div className='pic5'>
                <img src="./images/18.JPG" alt="img" width='100%' />
                <h3>Bella & kevin</h3>
            </div>
        </div>
        <div className='pic6'>
            <div className='pic7'>
                <img src="./images/19.JPG" alt="img" width='100%' />
                <h3>Alex & Kelly</h3>
            </div>
            <div className='pic8'>
                <img src="./images/20.JPG" alt="img" width='100%' />
                <h3>Ethen & kais</h3>
            </div>
        </div>
        <div className='pic9'>
            <div className='pic10'>
                <img src="./images/21.JPG" alt="img" width='100%' />
                <h3>Nathan & Jenna</h3>
            </div>
            <div className='pic11'>
                <img src="./images/22.JPG" alt="img" width='100%' />
                <h3>Cris & Eric</h3>
            </div>
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

export default Blogs
