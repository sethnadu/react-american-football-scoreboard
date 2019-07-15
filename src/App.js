//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
 const [homeScore, setHomeScore] = useState(0);
 const [awayScore, setAwayScore] = useState(0);
 const [quarter, setQuarter] = useState(1);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Eagles</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Cowboys</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow props = {quarter}/>
    
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick ={() => setHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick ={() => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick ={() => setAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick ={() => setAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className ="bottomRowButtons">
        <button onClick = {() => {
          if (quarter !== 4)
          {setQuarter(quarter + 1)} 
          else if (quarter === 4){
            setQuarter(quarter - 3);
          }} } className = "homeButtons__fieldGoal">Quarter</button>
        </div>
        {/* <div>
          <button className = "awayButtons__fieldGoal">Quarter</button>
        </div> */}

        </section> 
      </section>
    </div>
  );
}

export default App;
