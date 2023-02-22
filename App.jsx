import { useState } from 'react'

import apple from './assets/apple_30.png';
import './App.css';
function App() {
 

  return (
  
   <div className="container">
     <div className="part1">

        <img src={apple} alt="" className='img'/>
      <div className="part1-product">
        <p>PRODUCT .<span>July 24 2020</span> </p>
        <h2>Interview-- What it's like t work remotely in big-sized product development</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam hic facilis consequuntur quasi eius iusto qui tenetur perferendis numquam, vel, adipisci maiores blanditiis dolores possimus, eaque harum accusantium dolor sed consequatur praesentium! Fugiat modi voluptatibus, libero debitis eum veniam.</p>
        <div className="sous-img">
          <img src=" "alt="" />
          <div className="desc-img">
            <p>BRUNO Teixeira</p> <br />
            <span>Lead Product Owner</span>
          </div>
        </div>
      </div>
    </div>
    <div className="part2">
      <div className="part2-1">
        <img src="" alt=""  className='img2-1'/>
        <p>DEVELOPMENT .<span>July 2 2020</span> </p>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, tempora.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque culpa accusantium voluptates minima totam fugit ad reprehenderit beatae molestiae error, autem neque architecto alias. Expedita eum harum porro vero quidem, laboriosam modi saepe eos, dicta nemo fuga culpa ipsam ea.</p>
      </div>
      <div className="part2-2">
      <img src= "" alt="" className='img2-1'/>
        <p>DEVELOPMENT .<span>July 2 2020</span> </p>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, tempora.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque culpa accusantium voluptates minima totam fugit ad reprehenderit beatae molestiae error, autem neque architecto alias. Expedita eum harum porro vero quidem, laboriosam modi saepe eos, dicta nemo fuga culpa ipsam ea.</p>
      </div>
    </div>
   </div>
  )
}

export default App
