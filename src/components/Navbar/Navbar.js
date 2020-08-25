import React from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
    return (
        <div>
            <div className="col-md-10 col-0 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">Friend-Zone</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item list">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item list">
                            <a className="nav-link" href="#">Friends</a>
                        </li>
                       
                        
                        </ul>
                       
                    </div>
</nav>
            </div>
        </div>
    );
};

export default Navbar;