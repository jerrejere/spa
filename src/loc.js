import React from 'react'
import useKijazi from './kijazi'

function Loc({ spaAttendants }) {
  const [loc, setLoc] = useKijazi()
  const deleteLoc = ()=>{
    fetch(`http://localhost:9292/spaAttendants/${spaAttendants?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))

    fetch("http://localhost:9292/spaAttendants")
      .then(res => res.json())
      .then(data => {
        setLoc(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <>
       { `${spaAttendants?.first_name} ${spaAttendants?.last_name} - ${spaAttendants?.service_type || spaAttendants?.service_name}` }  <span style={{cursor: "pointer"}} onClick={deleteLoc}></span>
    </>
  )
}

export default Loc