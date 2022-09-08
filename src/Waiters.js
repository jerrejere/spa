import React from 'react'
import Waiter from './Waiter'
import useKijazi from './Mtambo/kijazi'
import useKijaziClient from './Mtambo/KijaziClient'
import Customer from './Customer'

function Waiters() {
  const [server, setServer, url] = useKijazi()
  const [cus, setCus] = useKijaziClient()

  return (
    <div>
      <h3>Our spa attendants:</h3>
        <ol>
            {!server ? "Loading..." : server?.map((waiter)=>{
              return (
              <li key={waiter?.id}>
                <Server waiter={waiter}/>
              </li>
              )
            })}
        </ol>
        <h3>Current customer being served:</h3>
        <ol>
            {!cus ? "Loading..." : cus?.map((Customer)=>{
              return (
              <li key={customer?.id}>
                <Customer patt={customer}/>
              </li>
              )
            })}
        </ol>
    </div>
  )
}

export default Waiters;