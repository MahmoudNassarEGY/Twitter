import React, { Fragment, useEffect, useState } from "react";

import Edittweet from "./EditTweet";

const Listtweets = () => {
  const [tweets, settweets] = useState([]);

  //delete tweet function

  const deletetweet = async id => {
    try {
      const deletetweet = await fetch(`http://localhost:3000/tweets/${id}`, {
        method: "DELETE"
      });

      settweets(tweets.filter(tweet => tweet.tweet_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const gettweets = async () => {
    try {
      const response = await fetch("http://localhost:3000/tweets");
      const jsonData = await response.json();

      settweets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gettweets();
  }, []);

  console.log(tweets);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {tweets.map(tweet => (
            <tr key={tweet.tweet_id}>
              <td>{tweet.description}</td>
              <td>
                <Edittweet tweet={tweet} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletetweet(tweet.tweet_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Listtweets;