import React from 'react';
import ReactCardFlip from "react-card-flip";
import "./inforCards.styles.css";
//import {BiError} from "react-icons/bi"

class  InforCard extends React.Component{

 constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="container">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipSpeedBackToFront={2}
          flipSpeedFrontToBack={2}
        >
          <div className="card" onClick={this.handleClick}>
            <h1>Click to flip a Card</h1>
            <img
              className="image"
              src="https://images.pexels.com/photos/3957991/pexels-photo-3957991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>

          <div className="card" onClick={this.handleClick}>
            <h1>DON’T PANIC </h1> <br />
            <p>
              There is no need to panic <br /> – 82% of COVID-19 cases are mild:
              <br />
              patients only experience a slight fever, fatigue and a cough.{" "}
              <br /> Only about 6% of patients need intensive care.
              <br /> The vast majority of people can stay at home and get better
              without hospital treatment.{" "}
            </p>
          </div>
        </ReactCardFlip>

        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipSpeedBackToFront={2}
          flipSpeedFrontToBack={2}
        >
          <div className="card" onClick={this.handleClick}>
            <h1>Click to flip a Card</h1>
            <img
              className="image"
              src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>

          <div className="card" onClick={this.handleClick}>
            <h1>SYMPTOMS </h1> <br />
            <p>
              The most common symptoms are: <br />
              Cough
              <br /> Fever
              <br /> Sore throat <br />
              Shortness of breath
            </p>
          </div>
        </ReactCardFlip>

        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipSpeedBackToFront={2}
          flipSpeedFrontToBack={2}
        >
          <div className="card" onClick={this.handleClick}>
            <h1>Click to flip a Card</h1>
            <img
              className="image"
              src="https://images.pexels.com/photos/3786131/pexels-photo-3786131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>

          <div className="card" onClick={this.handleClick}>
            <h1>PREVENTATIVE TIPS </h1> <br />
            <p>
              – Wash your hands regularly with soap or an alcohol-based hand
              sanitizer.
              <br /> – Avoid touching your eyes, nose, and mouth with unwashed
              hands.
              <br /> – Avoid close contact with people who are sick.
              <br /> – Cover your cough or sneeze with a flexed elbow or a
              tissue, then throw the tissue in the bin.
              <br /> – Clean and disinfect frequently touched objects and
              surfaces.
            </p>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
export default InforCard;