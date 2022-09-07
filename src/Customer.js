import React from 'react'
import useFetchPatient from '../hooks/fetchPatient'

function Patient({ patt }) {
  const [pat, setPat] = useFetchPatient()
  const deletePat = ()=>{
    fetch(`http://localhost:9292/patients/${patt?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))

    fetch("http://localhost:9292/patients")
        .then(res => res.json())
        .then(data => {
          setPat(data)
          console.log(data)
        })
        .catch(err => console.log(err))
  }
  
  return (
    <>
       { `${patt?.first_name} ${patt?.last_name} - ${patt?.ailment_type || patt?.ailment_name}` }  <span style={{cursor: "pointer"}} onClick={deletePat}>🗑</span>
    </>
  )
}

export default Patient