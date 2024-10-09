import '../styles/Contacto.css'
import Form from 'react-bootstrap/Form';

function Contacto(){
    return(
        <>
        <section className='cont'>

           <div className='contenedorcontacto'>
            <div className='contactobotones'>
           <h3>CONTACT US</h3>
                <div className='botonescont'>
                <button>Call Us</button>
                <button>Follow Us</button>
                </div>
            </div>
            <div className='formulariocontacto'>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="EMAIL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="YOUR MESSAGE"/>
      </Form.Group>
    </Form>

            </div>
            
            </div>
        </section>
        </>
    )
}

export default Contacto;
