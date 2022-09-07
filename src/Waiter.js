import React from 'react'
import useFetchData from '../hooks/fetchData'

function Waiter({ waiter}) {
  const [waiter, setWaiter] = useFetchData()
  const deleteWaiter = ()=>{
    fetch(`http://localhost:9292/doctors/${doctor?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))

    fetch("?????????????????")
      .then(res => res.json())
      .then(data => {
        setDoc(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <>
       { `${waiter?.first_name} ${waiter?.last_name} - ${waiter?.ailment_type || waiter?.ailment_name}` }  <span style={{cursor: "pointer"}} onClick={deleteWaiter}>🗑</span>
    </>
  )
}

export default Doc