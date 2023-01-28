import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className="card my-3 " style={{ width: "18rem", display: "inline-block", marginLeft: "65px", borderRadius: "10px" }} >
      <img src={props.data.img} className={props.data.img_class} style={{ height: "12rem", borderRadius: "10px" }} alt="" />
      <div className={props.data.card_class}>
        <h5 className={props.data.h5_class} >{props.data.name} </h5>
        <p className={props.data.p_class} > {props.data.info}</p>
        <Link  className={props.data.a_class} to="/" > Buy Now!</Link>
      </div>
    </div>

  )
}

export default Card