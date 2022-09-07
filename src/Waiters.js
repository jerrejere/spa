// import React from 'react'
// import Doc from './Doc'
// // import useFetchData from '../hooks/fetchData'
// // import useFetchCustomer from '../hooks/useFetchCustomer'
// import Customer from './Customer'

// function Waiters() {
//   const [doc, setDoc, url] = useFetchData()
//   const [pat, setPat] = useFetchPatient()

//   return (
//     <div>
//       <h3>Our waiters:</h3>
//         <ol>
//             {!doc ? "Loading..." : doc?.map((doctor)=>{
//               return (
//               <li key={doctor?.id}>
//                 <Doc doctor={doctor}/>
//               </li>
//               )
//             })}
//         </ol>
//         <h3> Customer being served:</h3>
//         <ol>
//             {!pat ? "Loading..." : pat?.map((patient)=>{
//               return (
//               <li key={patient?.id}>
//                 <Customer patt={patient}/>
//               </li>
//               )
//             })}
//         </ol>
//     </div>
//   )
// }

// export default Waiters;
import React from 'react'

const Waiters = () => {
  return (
    <div>Waiters</div>
  )
}

export default Waiters