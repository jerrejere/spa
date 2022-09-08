import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function ContactUs(){
    return(
        <div className="uncle">
		<div className="auntie">
			<div className="hallo"></div>
			<div className="jerry">
				<h2>Contact Us</h2>
				<input type="text" className="mambo" placeholder="Your Name" />
				<input type="text" className="mambo" placeholder="Your Email" />
				<input type="text" className="mambo" placeholder="Phone" />
				<textarea placeholder="Message" className="poa"></textarea>
				<button className="lolo">Send</button>
			</div>
		</div>
	</div>
    )
}

export default ContactUs;