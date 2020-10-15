var express = require('express');  
var request = require("request");
var app = express();
app.use(express.json());
const port= process.env.Port || 3000;

app.post("/meeting", (req, res) => {

  var options = {
    method: "POST",
    url: 'https://api.zoom.us/v2/users/me/meetings',
    body: {
      topic: "test create meeting",
      type: 1,
    },
auth: {
            'bearer': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6Im9SUmxKbFZ2UWJTSFppMW1OVmVlM3ciLCJleHAiOjE2MDI2OTA5ODksImlhdCI6MTYwMjY4NTU5MH0.61B0WAtHIJKEovwuRnL6iDeh1t0SecwWshBUhG-kADM'
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json"
    },
    json: true
  };

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send("create meeting result: " + JSON.stringify(response));
});

});
app.listen(3000);