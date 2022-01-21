import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#"><strong>BingeWatcher</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="navbar-brand" href="#">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand" href="#">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand" href="#">Profile</a>
                            </li>
                        </ul>
                        {/* <li className="nav-item dropdown">
                            <a className="navbar-brand dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand disabled" href="#">Disabled</a>
                        </li>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;