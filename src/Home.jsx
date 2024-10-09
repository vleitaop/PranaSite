import Banner from '../src/assets/banner-01.png'
import '../styles/Home.css'
function Home(){
    return(
        <>
        <section className='cabeceraHome'>
        <div className='textoHome'>
        <h1>YOGA FOR <br /> THE BOLD</h1>
        <p>
        We are a friendly based yoga and meditation studio. <br />
        We believe that by taking time to focus on your <br />
         fitness and head space it will enable you to be <br />
          bolder and more 
        confident in your everyday life.
        </p>
        <button>Book a class</button>
        </div>
        <div className='imagen'>
            <img className='banner' src={Banner} alt="" />
        </div>
        </section>

        </>

    )
}

export default Home;