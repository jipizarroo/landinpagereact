import React from 'react';

const Jumbotron = (props) => {
    return (
    <div className="jumbotron">
  <h1 className="display-3">{props.Jtitle}</h1>
  <p className="lead">{props.Jtext}.</p>

  <a className="btn btn-primary btn-lg" href="#" role="button">{props.Jbutton}</a>
</div>
)
};

export default Jumbotron;