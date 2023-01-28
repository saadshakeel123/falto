import "./Hero.css"
import { Outlet } from "react-router"
import React from 'react'

function Switzerland() {
  return (
    <body>
      <div className="d-flex">
        <div className="img"></div>
        <div style={{ width: "45%", borderRadius: "10px" }} className="div2">  <iframe style={{ borderRadius: "10px" }} width="100%" height="290" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Switzerland+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">bike gps</a></iframe></div>

      </div>
      <div className="container">
        <h1 className="head1 text-light text-center ">Switzerland</h1>
        <p className="text-light"> Switzerland is a small mountainous country located in central Europe. This landlocked country is about the size of New Jersey and is between France and Italy. It is also bordered by Austria, Germany, and Liechtenstein.

          Most of the population lives in the plateau which is between the high Alps in the south and the Jura mountains in the north. The mountainous area in the south is sparsely populated.</p>
      </div>
     
    </body>
  )
}
export default Switzerland