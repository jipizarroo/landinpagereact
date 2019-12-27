import React from 'react';

const Deck = (props) => {
    return (
        <div className="card-deck">
        <div className="card text-center">
          <img className="card-img-top" src={props.img} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{props.titlec1}</h5>
            <p className="card-text">{props.textc1}</p>
          </div>
          <div className="card-footer">
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card text-center">
          <img className="card-img-top" src={props.img} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{props.titlec2}</h5>
            <p className="card-text">{props.textc2}</p>
          </div>
          <div className="card-footer">
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card text-center">
          <img className="card-img-top" src={props.img} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{props.titlec3}</h5>
            <p className="card-text">{props.textc3}</p>
          </div>
          <div className="card-footer">
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card text-center">
          <img className="card-img-top" src={props.img} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{props.titlec4}</h5>
            <p className="card-text">{props.textc4}</p>
          </div>
          <div className="card-footer">
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
};


export default Deck 