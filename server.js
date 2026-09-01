const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/booking', (req, res) => {
    const booking = req.body;
    console.log('New booking request', booking);
    res.send('Thank you! We recieved your request and will contact you shortly.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})


