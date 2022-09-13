import React from 'react'
import Loc from './loc'
import useKijaziClient from './KijaziClient'
import useKijazi from './kijazi'
import Customer from './Customer'

function SpaAttendant() {
  const [loc] = useKijazi()
  const [pat] = useKijaziClient()

  return (
          <div>
       <h3>Current customer being served:</h3>
        <ol>
            {!pat ? "Hold on ..." : pat?.map((customer)=>{
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

export default SpaAttendant;