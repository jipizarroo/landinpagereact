import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Deck from './components/carddeck';
import Footer from './components/footer';


const App = (props) => {
    return (
        <>
            <Navbar nav1="Start Bootstrap" nav2="Home" nav3="About" nav4="Services" nav5="Contact"/>
            <div className="container">
                <div className="row mt-4 mb-4">
                    <div className="col-md-12">
                    <Jumbotron Jtitle="A Warm Welcome!" Jbutton="Call to action!" Jtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."/>
                    <Deck img="https://via.placeholder.com/500x325" 
                    textc1 ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
                     textc2 ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
                      textc3="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." 
                      textc4="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." 
                      titlec1="Card Title1"
                      titlec2="Card Title2"
                      titlec3="Card Title3"
                      titlec4="Card Title4"
                      />
                    </div>
                </div>
            </div>
            <Footer textFooter="Copyright © Your Website 2019" />
        </>
    );
}


export default App;