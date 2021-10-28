
import './App.css';
import { useState } from 'react';

var foodDictionary={
  "🍕" : "Pizza",
  "🍔" : "Burger",
  "🍟" : "Fries",
  "🌭" : "Hotdog",
  "🍞" : "Bread",
  "🍗" : "Chicken Leg",
  "🥞" : "Pancake",
  "🥐" : "Croissant",
  "🥡" : "Takeout Box",
  "🥗" : "Green Salad"
};

var emojisWeKnow = Object.keys(foodDictionary);

function App() {

  var[meaning, setMeaning]=useState("");

  function foodInputHandler(event){
    var userInput= event.target.value;

    var meaning=foodDictionary[userInput];

    if(meaning=== undefined){
      meaning= "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function foodClickHandler(emoji){
    var meaning=foodDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food</h1>

<input onChange={foodInputHandler}></input>

<h2>{meaning}</h2>

<h3>emojis we know</h3>
{emojisWeKnow.map(function(emoji){
  return (
    <span onClick={() => foodClickHandler(emoji)} 
    style={{fontSize: "2rem", padding: "0.5rem", cursor:"pointer"}} 
    key={emoji}>{emoji}</span>
  );
})}
    </div>
  );
}

export default App;
