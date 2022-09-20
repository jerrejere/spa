import React from 'react'
import Card from 'react-bootstrap/Card';
// import Johny from '/home/jerre/hotel-management/src/img/1484523.jpg';
const Home = () => {
  return (
    <div>
                    <section className="hero">
                    <div className="content">
                         <span>MamboLeo</span>
                         <h2>We are dedicated to help you feel and leave the moment </h2>
                         <p>Are you  tired and need some attention to your body  to make you feel relax and be the king or  queen that you are supposed to be </p>
                         <p>Visit Mamboleo for exclusive service</p>
                         <p>We offer:
                            <Card>
                          <ol><strong>facials</strong></ol>
                          <ol>massages</ol>
                          <ol>Bathscrub</ol>
                          <ol>Sauna</ol>
                          <ol>Bath</ol>
                          <ol>And many more</ol>
                          </Card>
                          See our contact us page and give us a call and we will be right there to give you the best services
                          </p>.

                         </div>
                 <div className="ilo">
                     <div className="img">
                         {/* {<img src={Johny} alt=" " /> } */}
                         {/* <img src='' */}
                     </div>
                    
                 </div>
             </section>
         </div>
     )
 }

export default Home