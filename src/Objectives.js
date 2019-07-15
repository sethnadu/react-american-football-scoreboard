import React, {useState} from "react";
import "./App.css";

const name = {name: "Seth Nadu", location: "Lancaster", age: "24", react: "I believe React is a library used to create complex UI designs. It is created as a component that can be pieces with other react components to make a application. All the components also seems to be reusable. As a library it uses Javascript as well as JSX to be able to add HTML like attributes to the components. This than can be applied directly to the DOM."}



function Objectives()  {
    const [clicked, setClicked] = useState(0);
    return (
      <div className = "scoreboard">
          <h1 className="home__name">{name.name}</h1>
          <h2 className="homeButtons__touchdown">{name.location}</h2>
          <h3 className="homeButtons__touchdown">{name.age}</h3>
          <h3 className="homeButtons__touchdown">{name.react}</h3>
          <section className="buttons">
           <button className="homeButtons__fieldGoal" onClick = {() => setClicked(clicked + 1)}>Click's: {clicked}</button>
          </section>
      </div>
    )
}


export default Objectives;