import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Form() {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName] = useState('')
    const [ email, setEmail] = useState('')
    const [ address, setAddress] = useState('')
    const [ telephone, setTelephone ] = useState('')
    const [ town, setTown ] = useState('')
    const [ ailment, setAilment] = useState('')

    function handleSubmit(e){
      e.preventDefault()
      fetch("???????????????????", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: telephone,
          town: town,
          ailment_type: ailment
        })
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        setFirstName('')
        setLastName('')
        setEmail('')
        setAddress('')
        setTelephone('')
        setTown('')
        setAilment('')
      })
      .catch(err => err.message)

      document.querySelector('form').reset()
    }
    
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Book Now</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              required
              className ="field"
              placeholder='First Name'
              value={ firstName }
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input
              type='text'
              required
              className ="field"
              placeholder='Last Name'
              value={ lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <br />
            <select>   
              <option value='Female'> Female</option>
              <option value='Male'>Male</option>
              <option value='Both'>Transgender</option>
            </select>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Email'
              value={ email }
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
               type='text'
               value={ address }
               placeholder="Address"
               className='field'
               onChange={(e) => setAddress(e.target.value)}
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Telephone'
               value={ telephone}
               onChange={(e) => setTelephone(e.target.value)}
           ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Town'
               value={ town }
               onChange={(e) => setTown(e.target.value)}
           ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Ailment Name'
               value={ ailment }
               onChange={(e) => setAilment(e.target.value)}
           ></input>
           <label className='name'>Ailment type:</label>
           <select>
              <option value='Severe'> Severe</option>
              <option value='Mild'>Mild</option>
           </select>
           <br />
           <label className='name'>Select Doctor:</label>
            <select>
              <option value='waiter'>Me Yu</option>
              <option value='waiter'>Johny Sins</option>
           </select>
          <textarea placeholder="Anymore feedback" className="field"></textarea>
          <button className="btn2">Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default Form