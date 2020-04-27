import React from "react";
import { ReactComponent as Playicon } from "../svgs/play.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav"> dummy test </div>
      <div className="mainContent">
        <div className="cardsWrap">
          <h1> Algo para ti </h1>
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
                alt="Pic 1"
              />
            </div>
            <div className="cardContent">
              <h3> Musica Preferida </h3>
            </div>
            <span className="playIcon">
              <Playicon />
            </span>
          </div>
        </div>
        <div className="cardsWrap">
          <h2> Concentracion </h2>
          <p>Musica para ayudarte a estudiar</p>
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
                alt="Pic 1"
              />
            </div>
            <div className="cardContent">
              <h3> Musica Para concentracion </h3>
              <span>
                Minimalizta, electronica and musica moderna para concentrarse
              </span>
            </div>
            <span className="playIcon">
              <Playicon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
