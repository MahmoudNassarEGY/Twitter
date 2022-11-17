const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//Routes
//create a tweet
app.post("/tweets", async(req, res) => {

    try{
        const {description} = req.body;
        const newTweet = await pool.query("INSERT INTO tweet (description) VALUES($1 RETURNING *", [description]);
        res.json(newtweet.rows[0]);

    }
    catch(err){
        console.error(err.message);
    }
})
//get all tweets
app.get("/tweets", async(req, res) => {
    try {
        const allTweets = await pool.query("SELECT * FROM tweets")
        res.json(allTweets.rows)
    } catch (err) {
        console.error(err.message);

    }
})
// get a tweet
app.get("/tweets/:id", async (req,res)=>{
    try {
        const { id }= req.params
        const tweet = await pool.query("SELECT * FROM tweets WHERE tweet_id = $1",[id])
    } catch (err) {
        console.error(err.message);

    }
})
// update a tweet
app.put ("/tweets/:id", async (req,res)=>{
    try {
        const {id} = req.params
        const {description} = req.body
        const updateTweets = await pool.query("UPDATE tweets SET description = $1 WHERE tweet_id = $2", [description . id]) 
        res.json("tweet was updated")
    } catch (err) {
        console.error(err.message);

    }
})
// delete a tweet
app.delete ("/tweets/:id", async (req,res)=>{
    try {
        const {id} = req.params
        const deletetweet = await pool.query("DELETE FROM tweet WHERE tweet_id = $1", [id])

    res.json("Deleted")
    } catch (err) {
        console.error(err.message);

    }
})
app.listen(3000, ()=>{
    console.log("listening on 3000");
});