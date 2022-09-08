import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Form() {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName] = useState('')
    
    const [ address, setAddress] = useState('')
    const [ telephone, setTelephone ] = useState('')
    const [ town, setTown ] = useState('')
   

    function handleSubmit(e){
      e.preventDefault()
      fetch("http://localhost:9292/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
                    phone: telephone,
          town: town,
        
        })
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        setFirstName('')
        setLastName('')
              setAddress('')
        setTelephone('')
        setTown('')
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
               placeholder='phone number'
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
          
           <br />
           <label className='name'>Select attendant you want to be attained by:</label>
            <select>
              <option value='nani'>Male</option>
              <option value='nani'>Female</option>
              <option value='nani'>Transgender</option>
              <option value='nani'>Gay</option>
              <option value='nani'>Lesbian</option>
           </select>
          <textarea placeholder="Specified time and date" className="field"></textarea>
          <button className="btn2">Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default Form