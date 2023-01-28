import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import "./Hero.css"

function Countries() {
    return (
        <>
        <div className="container d-flex justify-content-center my-5 div3">
            <nav class="navbar navbar-expand-lg navbar-dark ">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><Link class="nav-link text-light text-decoration-underline" to="/countries/switzerland ">Switzerland</Link></li>
                    <li class="nav-item"><Link class="nav-link text-light text-decoration-underline" to="/countries/spain">Spain</Link></li>
                    <li class="nav-item"><Link class="nav-link text-light text-decoration-underline" to="/countries/italy">Italy</Link></li>
                </ul>
            </nav>
        </div>
        <Outlet/>
        </>
    )
}

export default Countries