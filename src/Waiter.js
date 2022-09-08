import React from 'react'
import useKijazi from './Mtambo/kijazi'

function Waiter({ server}) {
  const [waiter, setWaiter] = useFetchData()
  const deleteDoc = ()=>{
    fetch(`http://localhost:9292/doctors/${waiter.id}`, {
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
        setServer(data)
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

export default Waiter