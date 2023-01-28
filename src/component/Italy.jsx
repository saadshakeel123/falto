import React from 'react'
import "./Hero.css"

function Italy() {
    return (
        <body>
            <div className="d-flex">
                <div className="img3"></div>
                <div style={{ width: "45%", borderRadius: "10px" }} className="div2">  <iframe style={{ borderRadius: "10px" }} width="100%" height="290" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=italy+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">bike gps</a></iframe></div>

            </div>
            <div className="container">
                <h1 className="head1 text-light text-center ">Italy</h1>
                <p className="text-light"> Italy is a boot-shaped peninsula that juts out of southern Europe into the Adriatic Sea, Tyrrhenian Sea, Mediterranean Sea, and other waters. Its location has played an important role in its history.

                    The sea surrounds Italy, and mountains crisscross the interior, dividing it into regions. The Alps cut across the top of the country and are streaked with long, thin glacial lakes. From the western end of the Alps, the Apennines mountains stretch south down the entire peninsula.</p>
            </div>

        </body>
    )
}

export default Italy