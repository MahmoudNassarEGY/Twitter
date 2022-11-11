import React, { Fragment } from "react";
import './App.css';

//components

import InputTweet from "./components/InputTweet";
import ListTweets from "./components/ListTweets";

function App() {
  return (
  <Fragment>
  <div className="container">
    <InputTweet/>
    <ListTweets/>
  </div>
  </Fragment>
  );
}

export default App;
