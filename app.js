if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const express = require('express');
const { json } = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/weather', (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.body.lat}&lon=${req.body.lng}&units=metric&appid=${OPENWEATHER_API_KEY}`;

    axios(url, {
        url: url,
        responseType: 'json'
    })
    .then(resData => {
        res.send(resData.data.current);
    })
});

app.listen(3000, () => {
    console.log("Server Started");
});