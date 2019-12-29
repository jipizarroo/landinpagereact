import React from 'react';

const Navbar = (props) =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <div className="container">
  <a className="navbar-brand" href="#">{props.nav1}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">{props.nav2} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{props.nav3}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{props.nav4}</a>
      </li>
            <li className="nav-item">
        <a className="nav-link" href="#">{props.nav5}</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
};


export default Navbar; 