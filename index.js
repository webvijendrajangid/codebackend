 // Check the bookmark backend folder for production devlopement url 
 // check all step for backend on drive 
require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

const githubData = {
  "login": "webvijendrajangid",
  "id": 28087586,
  "node_id": "MDQ6VXNlcjI4MDg3NTg2",
  "avatar_url": "https://avatars.githubusercontent.com/u/28087586?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/webvijendrajangid",
  "html_url": "https://github.com/webvijendrajangid",
  "followers_url": "https://api.github.com/users/webvijendrajangid/followers",
  "following_url": "https://api.github.com/users/webvijendrajangid/following{/other_user}",
  "gists_url": "https://api.github.com/users/webvijendrajangid/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/webvijendrajangid/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/webvijendrajangid/subscriptions",
  "organizations_url": "https://api.github.com/users/webvijendrajangid/orgs",
  "repos_url": "https://api.github.com/users/webvijendrajangid/repos",
  "events_url": "https://api.github.com/users/webvijendrajangid/events{/privacy}",
  "received_events_url": "https://api.github.com/users/webvijendrajangid/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vijendra Jangid",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "HTML, HTML5, CSS, jQuery, JavaScript, Next Js, React Js, PHP, Photoshop, Adobe XD ",
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2017-04-27T07:21:46Z",
  "updated_at": "2025-09-11T08:56:59Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Vijendra welcome to twitter page sever')
})

app.get('/login', (req, res) => {
  res.send('<h1>You are login page</h1>')
})

app.get('/githubuser', (req, res) => {
  res.json(githubData)
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

