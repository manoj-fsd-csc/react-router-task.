import React from 'react'
import {Link} from 'react-router-dom'

function Topbar() {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/all" className="nav-link" href="#">ALL</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/fullstack" className="nav-link" href="#">FULL STACK DEVELOPMENT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dscience" className="nav-link" href="#">DATA SCIENCE</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cyber" className="nav-link" href="#">CUBER SECURITY</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/career" className="nav-link" href="#">CAREER</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav >
    </>
}

export default Topbar