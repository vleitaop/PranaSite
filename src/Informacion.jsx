import '../styles/Informacion.css'
import Card from 'react-bootstrap/Card';


import clases from '../src/assets/clases.jpg'
import instructores from '../src/assets/instructores.jpg'
import meditacion from '../src/assets/meditacion.jpg'



function Informacion(){
    return(
        <>
        <section className='info'>
<div className='contenedorcards'>
      <div className='card-1'>
        <img className='imginfo' src={clases} alt="" />
        <div className='parrafo'> 
                 <h3>CLASSES FOR ALL LEVELS</h3>

        <p>All our classes are suitable for BEGINNERS,  no previous experience is necessary. We recommend  you start with calmer styles to understand. </p>
            </div>
      <button>Book</button>
      </div>
      <div className='card-2'>
      <img className='imginfo' src={instructores} alt="" />
      <div className='parrafo'>      
        <h3>MEET THE INSTRUCTORS</h3>

        <p >We are an integrated team of specialists to provide the best quality and safety in each class, with passion and empathy.</p>
      </div>  
        <button>Meet</button>
      </div>
      <div className='card-3'>
      <img className='imginfo' src={meditacion} alt="" />
      <div className='parrafo'>      
        <h3>LET'S MEDITATE</h3>

        <p>We have a soundproof room specially designed for meditation,  available during the day. Three times a week we hold  a group meeting to learn meditation techniques.</p>
      </div>
        <button>See</button>
      </div>
      

</div>
    </section>
        </>
    )
}

export default Informacion;