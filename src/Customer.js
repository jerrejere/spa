import React from 'react'
import useKijaziClient from './KijaziClient'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

function Customer({ patt }) {
  const [setPat] = useKijaziClient()
  const deletePat = ()=>{
    fetch(`http://localhost:9292/customers/${patt?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))

    fetch("http://localhost:9292/customers")
        .then(res => res.json())
        .then(data => {
          setPat(data)
          console.log(data)
        })
        .catch(err => console.log(err))
  }
  
  return (
    <div>
    <Card>
       { `${patt?.first_name} 
       ${patt?.last_name}  ${patt?.service_type || patt?.service_name}` }  <span style={{cursor: "pointer"}}></span>
       <Button onClick={() => {
        deletePat(patt.id) }}>Delete</Button>
          </Card>
        </div>
      
  )
}

export default Customer



{/* <Card.Body>
<Card.Title>Name:   {patt?.first_name}</Card.Title>
<Card.Text>Location:    {patt?.last_name}</Card.Text>
<Card.Text>Lead Mechanic:   {patt?.service_type || patt?.service_name}</Card.Text>
<Card.Text> Garage certification number:    {garage.certification_number}</Card.Text>
</Card.Body>
<Button onClick={() => {
      deleteGarage(garage.id) }}>Delete</Button> */}