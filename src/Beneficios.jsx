import '../styles/Beneficios.css'
import estres from '../src/assets/vector2.png'
import ansiedad from '../src/assets/vector3.png'
import fuerte from '../src/assets/vector4.png'
import flexibilidad from '../src/assets/vector1.png'




function Beneficios(){
    return(
        <>
        <section className='seccionbeneficios'>
        <div>
        <h3>BENEFITS OF YOGA</h3>
        </div>
        <div className='beneficioscontenedor'> 
        <div className='beneficio'>
            <img src={estres} alt="" />
            <h4>Reduce stress</h4>
        </div>
        <div className='beneficio'>
            <img src={ansiedad} alt="" />
           <h4>Reduce anxiety</h4> 
        </div>
        <div className='beneficio'>
            <img src={fuerte} alt="" />
            <h4>Grow stronger</h4>
        </div>
        <div className='beneficio'>
           <img src={flexibilidad} alt="" />
            <h4>Aid flexibilithy</h4>
        </div> 
        </div>
        </section>

        </>

    )
}

export default Beneficios;