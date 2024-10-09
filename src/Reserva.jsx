import '../styles/Reserva.css'
import Form from 'react-bootstrap/Form';
import fotoreserva from '../src/assets/fotoreserva.jpg'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Reserva(){

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return(
        <>
        <section className='reserva' >
            <h3>BOOK A CLASS</h3>
            <div className='reservacontenedor'>
            
            <div className='reservaform'>
            <Form.Label htmlFor="inputPassword5"></Form.Label>
            <Form.Control
                type="name"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Name"
            />
                  <Form.Label htmlFor="inputPassword5"> </Form.Label>
            <Form.Control
                type="email"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Email"
            />
            <br />
            <Form.Select aria-label="Default select example">
            <option>Select class</option>
            <option value="1">Hatha Yoga</option>
            <option value="2">Aero Yoga</option>
            <option value="3">Fitness Yoga</option>
            </Form.Select>
            <br />
            <Form.Select aria-label="Default select example">
            <option>Select date</option>
            <option value="1">Monday</option>
            <option value="2">Wednesday</option>
            <option value="3">Friday</option>
            </Form.Select>
            <br />
          
           
            <button onClick={toggleShowA} className="mb-2">
                Book class
            </button>
            <Toast show={showA} onClose={toggleShowA} className='tostada'>
          <Toast.Header>

            <strong className="me-auto">Your reservation has been sent</strong>
            <small>Now</small>
          </Toast.Header>
          <Toast.Body>Woohoo, check your email!</Toast.Body>
        </Toast> 
           
            </div>
            <div className='fotoreserva'>
            <img src={fotoreserva} alt="" />
            </div>

        </div>
        </section>
        </>
    )
}

export default Reserva;